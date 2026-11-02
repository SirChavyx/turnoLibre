
import { NextResponse } from "next/server";
import { randomInt, randomUUID } from "node:crypto";
import { db, initializeDatabase } from "@/lib/db";

const horariosPermitidos = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

const alfabetoCodigo = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generarCodigoReserva() {
  let codigo = "TL-";

  for (let i = 0; i < 6; i++) {
    codigo += alfabetoCodigo[randomInt(alfabetoCodigo.length)];
  }

  return codigo;
}

function fechaArgentinaActual() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function fechaValida(fecha: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    return false;
  }

  const [anio, mes, dia] = fecha.split("-").map(Number);
  const fechaComprobada = new Date(Date.UTC(anio, mes - 1, dia));

  return (
    fechaComprobada.getUTCFullYear() === anio &&
    fechaComprobada.getUTCMonth() === mes - 1 &&
    fechaComprobada.getUTCDate() === dia
  );
}

// Obtiene la fecha y hora actual de Argentina.
function fechaHoraArgentinaEnMilisegundos() {
  const partes = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const obtener = (tipo: string) =>
    Number(partes.find((parte) => parte.type === tipo)?.value);

  return Date.UTC(
    obtener("year"),
    obtener("month") - 1,
    obtener("day"),
    obtener("hour"),
    obtener("minute"),
    obtener("second")
  );
}

export async function GET(request: Request) {
  try {
    await initializeDatabase();

    const { searchParams } = new URL(request.url);

    const salon = searchParams.get("salon");
    const profesional = searchParams.get("profesional");
    const fecha = searchParams.get("fecha");

    if (!salon || !profesional || !fecha) {
      return NextResponse.json(
        { error: "Faltan datos para consultar la disponibilidad." },
        { status: 400 }
      );
    }

    if (!fechaValida(fecha)) {
      return NextResponse.json(
        { error: "La fecha indicada no es válida." },
        { status: 400 }
      );
    }

    const resultado = await db.execute({
      sql: `
        SELECT hora FROM reservas
        WHERE salon = ?
          AND profesional = ?
          AND fecha = ?
          AND estado != 'cancelada'
        ORDER BY hora
      `,
      args: [salon, profesional, fecha],
    });

    return NextResponse.json({
      reservas: resultado.rows,
    });
  } catch (error) {
    console.error("Error al consultar reservas:", error);

    return NextResponse.json(
      { error: "No se pudo consultar la disponibilidad." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await initializeDatabase();

    let datos: Record<string, unknown>;

    try {
      datos = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Los datos enviados no tienen un formato válido." },
        { status: 400 }
      );
    }

    const campos = [
      "salon",
      "servicio",
      "profesional",
      "fecha",
      "hora",
      "cliente",
      "contacto",
    ];

    for (const campo of campos) {
      if (
        typeof datos[campo] !== "string" ||
        datos[campo].trim() === ""
      ) {
        return NextResponse.json(
          { error: `El campo ${campo} es obligatorio.` },
          { status: 400 }
        );
      }
    }

    const reservaDatos = {
      salon: (datos.salon as string).trim(),
      servicio: (datos.servicio as string).trim(),
      profesional: (datos.profesional as string).trim(),
      fecha: (datos.fecha as string).trim(),
      hora: (datos.hora as string).trim(),
      cliente: (datos.cliente as string).trim(),
      contacto: (datos.contacto as string).trim(),
    };

    if (
      reservaDatos.salon.length > 100 ||
      reservaDatos.servicio.length > 100 ||
      reservaDatos.profesional.length > 100 ||
      reservaDatos.cliente.length > 100 ||
      reservaDatos.contacto.length > 50
    ) {
      return NextResponse.json(
        { error: "Uno o más campos superan la longitud permitida." },
        { status: 400 }
      );
    }

    if (reservaDatos.cliente.length < 2) {
      return NextResponse.json(
        { error: "Ingresá un nombre válido." },
        { status: 400 }
      );
    }

    if (!fechaValida(reservaDatos.fecha)) {
      return NextResponse.json(
        { error: "La fecha indicada no es válida." },
        { status: 400 }
      );
    }

    if (reservaDatos.fecha < fechaArgentinaActual()) {
      return NextResponse.json(
        { error: "No se pueden reservar fechas anteriores al día de hoy." },
        { status: 400 }
      );
    }

    if (!horariosPermitidos.includes(reservaDatos.hora)) {
      return NextResponse.json(
        { error: "El horario seleccionado no es válido." },
        { status: 400 }
      );
    }

    // Comprobar si el horario ya está ocupado.
    const existente = await db.execute({
      sql: `
        SELECT id FROM reservas
        WHERE salon = ?
          AND profesional = ?
          AND fecha = ?
          AND hora = ?
          AND estado != 'cancelada'
        LIMIT 1
      `,
      args: [
        reservaDatos.salon,
        reservaDatos.profesional,
        reservaDatos.fecha,
        reservaDatos.hora,
      ],
    });

    if (existente.rows.length > 0) {
      return NextResponse.json(
        { error: "Ese horario ya está ocupado para ese profesional." },
        { status: 409 }
      );
    }

    const reserva = {
      id: randomUUID(),
      ...reservaDatos,
      estado: "confirmada",
      creadaEn: new Date().toISOString(),
    };

    let codigo = "";
    let reservaInsertada = false;

    // Generar un código único y guardar la reserva.
    for (let intento = 0; intento < 10; intento++) {
      codigo = generarCodigoReserva();

      try {
        await db.execute({
          sql: `
            INSERT INTO reservas (
              id, codigo, salon, servicio, profesional, fecha, hora,
              cliente, contacto, estado, creadaEn
            )
            VALUES (
              :id, :codigo, :salon, :servicio, :profesional, :fecha, :hora,
              :cliente, :contacto, :estado, :creadaEn
            )
          `,
          args: {
            ...reserva,
            codigo,
          },
        });

        reservaInsertada = true;
        break;
      } catch (error) {
        const mensaje =
          error instanceof Error ? error.message : "";

        // Si el código ya existe, generar otro.
        if (mensaje.includes("UNIQUE constraint failed: reservas.codigo")) {
          continue;
        }

        throw error;
      }
    }

    if (!reservaInsertada) {
      throw new Error("No se pudo generar un código único para la reserva.");
    }

    return NextResponse.json(
      {
        mensaje: "¡Turno reservado correctamente!",
        reserva: {
          ...reserva,
          codigo,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : "";

    if (
      mensaje.includes("UNIQUE constraint failed") ||
      mensaje.includes("SQLITE_CONSTRAINT")
    ) {
      return NextResponse.json(
        { error: "Ese horario ya está ocupado para ese profesional." },
        { status: 409 }
      );
    }

    console.error("Error al crear reserva:", error);

    return NextResponse.json(
      { error: "No se pudo registrar el turno." },
      { status: 500 }
    );
  }
}

// Cancelar una reserva mediante su código y teléfono de contacto.
export async function DELETE(request: Request) {
  try {
    await initializeDatabase();

    let datos: Record<string, unknown>;

    try {
      datos = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Los datos enviados no tienen un formato válido." },
        { status: 400 }
      );
    }

    const codigo =
      typeof datos.codigo === "string"
        ? datos.codigo.trim().toUpperCase()
        : "";

    const contacto =
      typeof datos.contacto === "string"
        ? datos.contacto.trim()
        : "";

    if (!codigo || !contacto) {
      return NextResponse.json(
        { error: "Ingresá el código de reserva y el teléfono de contacto." },
        { status: 400 }
      );
    }

    if (!/^TL-[A-HJ-NP-Z2-9]{6}$/.test(codigo)) {
      return NextResponse.json(
        { error: "El código de reserva no tiene un formato válido." },
        { status: 400 }
      );
    }

    const resultado = await db.execute({
      sql: `
        SELECT id, fecha, hora, estado
        FROM reservas
        WHERE codigo = ?
          AND contacto = ?
        LIMIT 1
      `,
      args: [codigo, contacto],
    });

    if (resultado.rows.length === 0) {
      return NextResponse.json(
        { error: "No encontramos una reserva con esos datos." },
        { status: 404 }
      );
    }

    const reserva = resultado.rows[0];

    if (reserva.estado !== "confirmada") {
      return NextResponse.json(
        { error: "Esta reserva ya fue cancelada o no está confirmada." },
        { status: 409 }
      );
    }

    const fecha = String(reserva.fecha);
    const hora = String(reserva.hora);

    if (!fechaValida(fecha) || !horariosPermitidos.includes(hora)) {
      return NextResponse.json(
        { error: "Los datos del turno no son válidos." },
        { status: 400 }
      );
    }

    const [anio, mes, dia] = fecha.split("-").map(Number);
    const [horaTurno, minutoTurno] = hora.split(":").map(Number);

    // Tanto el turno como la hora actual se comparan en horario argentino.
    const momentoTurno = Date.UTC(
      anio,
      mes - 1,
      dia,
      horaTurno,
      minutoTurno
    );

    const momentoActual = fechaHoraArgentinaEnMilisegundos();

    const minutosRestantes =
      (momentoTurno - momentoActual) / 60000;

    // Se permite cancelar exactamente una hora antes.
    if (minutosRestantes < 60) {
      return NextResponse.json(
        {
          error:
            "Solo podés cancelar el turno hasta una hora antes de su comienzo.",
        },
        { status: 400 }
      );
    }

    const actualizacion = await db.execute({
      sql: `
        UPDATE reservas
        SET estado = 'cancelada'
        WHERE id = ?
          AND estado = 'confirmada'
      `,
      args: [String(reserva.id)],
    });

    if (actualizacion.rowsAffected === 0) {
      return NextResponse.json(
        { error: "No se pudo cancelar la reserva. Verificá su estado." },
        { status: 409 }
      );
    }

    return NextResponse.json({
      mensaje: "El turno fue cancelado correctamente.",
      codigo,
      estado: "cancelada",
    });
  } catch (error) {
    console.error("Error al cancelar reserva:", error);

    return NextResponse.json(
      { error: "No se pudo cancelar el turno." },
      { status: 500 }
    );
  }
}
