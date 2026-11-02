
import { createClient } from "@libsql/client";

if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
  throw new Error("Faltan las variables de conexión de Turso.");
}

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function initializeDatabase() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS reservas (
      id TEXT PRIMARY KEY,
      codigo TEXT,
      salon TEXT NOT NULL,
      servicio TEXT NOT NULL,
      profesional TEXT NOT NULL,
      fecha TEXT NOT NULL,
      hora TEXT NOT NULL,
      cliente TEXT NOT NULL,
      contacto TEXT,
      estado TEXT NOT NULL DEFAULT 'confirmada',
      creadaEn TEXT NOT NULL
    )
  `);

  const columnas = await db.execute("PRAGMA table_info(reservas)");

  const existeContacto = columnas.rows.some(
    (columna) => columna.name === "contacto"
  );

  if (!existeContacto) {
    await db.execute("ALTER TABLE reservas ADD COLUMN contacto TEXT");
  }

  const existeCodigo = columnas.rows.some(
    (columna) => columna.name === "codigo"
  );

  if (!existeCodigo) {
    await db.execute("ALTER TABLE reservas ADD COLUMN codigo TEXT");
  }

  const duplicados = await db.execute(`
    SELECT salon, profesional, fecha, hora, COUNT(*) AS cantidad
    FROM reservas
    WHERE estado != 'cancelada'
    GROUP BY salon, profesional, fecha, hora
    HAVING COUNT(*) > 1
    LIMIT 1
  `);

  if (duplicados.rows.length === 0) {
    await db.execute(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_reservas_horario_activo
      ON reservas (salon, profesional, fecha, hora)
      WHERE estado != 'cancelada'
    `);
  } else {
    console.error(
      "No se pudo crear el índice: existen horarios duplicados activos."
    );
  }

  await db.execute(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_reservas_codigo
    ON reservas (codigo)
    WHERE codigo IS NOT NULL
  `);
}
