
"use client";

import { useEffect, useState } from "react";

type Props = {
  salon: {
    nombre: string;
    servicios: string[];
  };
  onCerrar: () => void;
};

type Reserva = {
  hora: string;
};

type ReservaConfirmada = {
  codigo?: string;
  id?: string | number;
  salon: string;
  servicio: string;
  profesional: string;
  fecha: string;
  hora: string;
  cliente: string;
  contacto: string;
};

type RespuestaReserva = {
  error?: string;
  reservas?: Reserva[];
  reserva?: ReservaConfirmada;
};

const horarios = [
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

export default function ReservaForm({ salon, onCerrar }: Props) {
  const [servicio, setServicio] = useState(salon.servicios[0] ?? "");
  const [profesional, setProfesional] = useState("Profesional disponible");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [cliente, setCliente] = useState("");
  const [contacto, setContacto] = useState("");

  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([]);
  const [consultando, setConsultando] = useState(false);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const [reservaConfirmada, setReservaConfirmada] =
    useState<ReservaConfirmada | null>(null);

  const [copiado, setCopiado] = useState(false);

  const hoy = new Date();

  const fechaMinima = [
    hoy.getFullYear(),
    String(hoy.getMonth() + 1).padStart(2, "0"),
    String(hoy.getDate()).padStart(2, "0"),
  ].join("-");

  useEffect(() => {
    if (!fecha || !profesional) {
      setHorariosOcupados([]);
      setHora("");
      return;
    }

    const controlador = new AbortController();

    async function consultarDisponibilidad() {
      setConsultando(true);
      setError("");
      setHora("");

      try {
        const nombreProfesional = `${salon.nombre} - ${profesional}`;

        const parametros = new URLSearchParams({
          salon: salon.nombre,
          profesional: nombreProfesional,
          fecha,
        });

        const respuesta = await fetch(
          `/api/reservas?${parametros.toString()}`,
          { signal: controlador.signal }
        );

        const resultado =
          (await respuesta.json()) as RespuestaReserva;

        if (!respuesta.ok) {
          throw new Error(
            resultado.error ?? "No se pudo consultar la disponibilidad."
          );
        }

        setHorariosOcupados(
          (resultado.reservas ?? []).map((reserva) => reserva.hora)
        );
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "No se pudo consultar la disponibilidad."
        );
      } finally {
        if (!controlador.signal.aborted) {
          setConsultando(false);
        }
      }
    }

    consultarDisponibilidad();

    return () => controlador.abort();
  }, [salon.nombre, profesional, fecha]);

  const horariosDisponibles = horarios.filter(
    (item) => !horariosOcupados.includes(item)
  );

  async function reservar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    setError("");

    if (!servicio) {
      setError("Seleccioná un servicio para continuar.");
      return;
    }

    if (!fecha || fecha < fechaMinima) {
      setError("Seleccioná una fecha válida.");
      return;
    }

    if (!hora || horariosOcupados.includes(hora)) {
      setError("Seleccioná un horario disponible.");
      return;
    }

    if (!cliente.trim() || !contacto.trim()) {
      setError("Completá tu nombre y tu teléfono o contacto.");
      return;
    }

    setEnviando(true);

    try {
      const datosReserva = {
        salon: salon.nombre,
        servicio,
        profesional: `${salon.nombre} - ${profesional}`,
        fecha,
        hora,
        cliente: cliente.trim(),
        contacto: contacto.trim(),
      };

      const respuesta = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosReserva),
      });

      const resultado =
        (await respuesta.json()) as RespuestaReserva;

      if (!respuesta.ok) {
        throw new Error(
          resultado.error ?? "No se pudo reservar el turno."
        );
      }

      if (!resultado.reserva?.codigo) {
        throw new Error(
          "La reserva se registró, pero todavía no se recibió el código corto. Revisaremos la API."
        );
      }

      setReservaConfirmada({
        ...datosReserva,
        codigo: resultado.reserva.codigo,
        id: resultado.reserva.id,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al reservar."
      );

      if (err instanceof Error && err.message.includes("ocupado")) {
        setHorariosOcupados((actuales) =>
          actuales.includes(hora) ? actuales : [...actuales, hora]
        );
        setHora("");
      }
    } finally {
      setEnviando(false);
    }
  }

  async function copiarCodigo() {
    if (!reservaConfirmada?.codigo) return;

    try {
      await navigator.clipboard.writeText(reservaConfirmada.codigo);
      setCopiado(true);

      setTimeout(() => setCopiado(false), 2500);
    } catch {
      setError("No se pudo copiar el código. Podés anotarlo manualmente.");
    }
  }

  function imprimirComprobante() {
    window.print();
  }

  function mostrarFecha(fecha: string) {
    const [anio, mes, dia] = fecha.split("-");
    return `${dia}/${mes}/${anio}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#3B1F17]/60 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-reserva"
        className="my-auto w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        {!reservaConfirmada ? (
          <>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#D2694A]">
                  Reservá tu turno
                </p>

                <h2
                  id="titulo-reserva"
                  className="mt-2 text-2xl font-extrabold"
                >
                  {salon.nombre}
                </h2>
              </div>

              <button
                type="button"
                onClick={onCerrar}
                aria-label="Cerrar formulario"
                className="rounded-full bg-[#FFF3E7] px-3 py-2 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={reservar} className="space-y-4">
              <label className="block text-sm font-semibold">
                Servicio

                <select
                  required
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="mt-2 w-full rounded-xl border p-3"
                >
                  {salon.servicios.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-semibold">
                Profesional

                <select
                  value={profesional}
                  onChange={(e) => setProfesional(e.target.value)}
                  className="mt-2 w-full rounded-xl border p-3"
                >
                  <option value="Profesional disponible">
                    Profesional disponible
                  </option>
                  <option value="Profesional 1">Profesional 1</option>
                  <option value="Profesional 2">Profesional 2</option>
                </select>
              </label>

              <label className="block text-sm font-semibold">
                Fecha

                <input
                  type="date"
                  required
                  min={fechaMinima}
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="mt-2 w-full rounded-xl border p-3"
                />
              </label>

              <div>
                <p className="mb-2 text-sm font-semibold">
                  Horarios disponibles
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {horarios.map((item) => {
                    const ocupado = horariosOcupados.includes(item);
                    const seleccionado = hora === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        disabled={ocupado || consultando || !fecha}
                        onClick={() => {
                          setHora(item);
                          setError("");
                        }}
                        className={`rounded-xl border p-3 text-sm font-semibold transition ${
                          ocupado
                            ? "cursor-not-allowed border-red-200 bg-red-50 text-red-600"
                            : seleccionado
                              ? "border-[#A73F22] bg-[#A73F22] text-white"
                              : "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        <span className="block">{item}</span>

                        <span className="mt-1 block text-xs">
                          {ocupado
                            ? "Reservado"
                            : seleccionado
                              ? "Seleccionado"
                              : "Disponible"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {!fecha && (
                  <p className="mt-2 text-xs text-gray-500">
                    Primero seleccioná una fecha.
                  </p>
                )}

                {consultando && (
                  <p className="mt-2 text-xs text-gray-500">
                    Consultando disponibilidad...
                  </p>
                )}

                {fecha && !consultando && horariosDisponibles.length === 0 && (
                  <p className="mt-2 text-sm text-red-600">
                    No quedan horarios disponibles para esta fecha.
                  </p>
                )}

                {fecha && !consultando && horariosDisponibles.length > 0 && (
                  <p className="mt-2 text-xs text-green-700">
                    {horariosDisponibles.length} horarios disponibles.
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-4 text-xs">
                  <span className="flex items-center gap-1 text-green-700">
                    <span className="h-3 w-3 rounded border border-green-200 bg-green-100" />
                    Disponible
                  </span>

                  <span className="flex items-center gap-1 text-red-600">
                    <span className="h-3 w-3 rounded border border-red-200 bg-red-100" />
                    Reservado
                  </span>
                </div>
              </div>

              <label className="block text-sm font-semibold">
                Tu nombre y apellido

                <input
                  required
                  minLength={2}
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  className="mt-2 w-full rounded-xl border p-3"
                  placeholder="Ej.: Juan Pérez"
                />
              </label>

              <label className="block text-sm font-semibold">
                Teléfono o contacto

                <input
                  required
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                  className="mt-2 w-full rounded-xl border p-3"
                  placeholder="Ej.: 3804..."
                />
              </label>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={enviando || consultando || !hora}
                className="w-full rounded-full bg-[#A73F22] px-6 py-3.5 font-bold text-white transition hover:bg-[#87331D] disabled:opacity-60"
              >
                {enviando ? "Guardando turno..." : "Confirmar reserva"}
              </button>
            </form>
          </>
        ) : (
          <div id="comprobante" className="space-y-5">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
                ✓
              </div>

              <h2 className="mt-4 text-2xl font-extrabold text-[#3B1F17]">
                ¡Turno confirmado!
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Tu reserva quedó registrada correctamente.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8C581] bg-[#FFF3E7] p-5">
              <p className="text-center text-sm font-bold uppercase tracking-wider text-[#A73F22]">
                Comprobante de reserva
              </p>

              <h3 className="mt-3 text-center text-xl font-extrabold">
                {reservaConfirmada.salon}
              </h3>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">Servicio</span>
                  <strong className="text-right">
                    {reservaConfirmada.servicio}
                  </strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">Profesional</span>
                  <strong className="text-right">
                    {reservaConfirmada.profesional.replace(
                      `${reservaConfirmada.salon} - `,
                      ""
                    )}
                  </strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">Fecha</span>
                  <strong>{mostrarFecha(reservaConfirmada.fecha)}</strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">Horario</span>
                  <strong>{reservaConfirmada.hora}</strong>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">Cliente</span>
                  <strong className="text-right">
                    {reservaConfirmada.cliente}
                  </strong>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8C581] pt-4 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Tu código de reserva
                </p>

                <p className="mt-2 text-3xl font-extrabold tracking-widest text-[#A73F22]">
                  {reservaConfirmada.codigo}
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  Guardá este código. Lo necesitarás para consultar o cancelar tu turno.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={copiarCodigo}
              className="w-full rounded-full border border-[#A73F22] px-5 py-3 font-bold text-[#A73F22] hover:bg-[#FFF3E7]"
            >
              {copiado ? "¡Código copiado!" : "Copiar código"}
            </button>

            <button
              type="button"
              onClick={imprimirComprobante}
              className="w-full rounded-full bg-[#A73F22] px-5 py-3 font-bold text-white hover:bg-[#87331D]"
            >
              Imprimir o guardar como PDF
            </button>

            {error && (
              <p role="alert" className="text-center text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={onCerrar}
              className="w-full rounded-full bg-[#FFF3E7] px-5 py-3 font-bold text-[#3B1F17]"
            >
              Finalizar
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
