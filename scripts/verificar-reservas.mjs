
import { createClient } from "@libsql/client";
import fs from "node:fs";
import path from "node:path";

function cargarVariables() {
  const envPath = path.resolve(".env.local");
  const contenido = fs.readFileSync(envPath, "utf8");

  for (const linea of contenido.split(/\r?\n/)) {
    const coincidencia = linea.match(/^([^#=\s]+)\s*=\s*(.*)$/);

    if (coincidencia) {
      const [, clave, valor] = coincidencia;
      process.env[clave] = valor.replace(/^["']|["']$/g, "");
    }
  }
}

async function main() {
  cargarVariables();

  if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    throw new Error("Faltan las variables de conexión de Turso.");
  }

  const db = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  try {
    const duplicados = await db.execute(`
      SELECT salon, profesional, fecha, hora, COUNT(*) AS cantidad
      FROM reservas
      WHERE estado != 'cancelada'
      GROUP BY salon, profesional, fecha, hora
      HAVING COUNT(*) > 1
    `);

    const indices = await db.execute(`
      SELECT name, sql
      FROM sqlite_master
      WHERE type = 'index'
        AND name = 'idx_reservas_horario_activo'
    `);

    console.log("\n--- RESERVAS DUPLICADAS ACTIVAS ---");

    if (duplicados.rows.length === 0) {
      console.log("No se encontraron duplicados activos.");
    } else {
      console.table(duplicados.rows);
    }

    console.log("\n--- ÍNDICE DE PROTECCIÓN ---");

    if (indices.rows.length === 0) {
      console.log("El índice todavía no existe.");
    } else {
      console.table(indices.rows);
    }
  } finally {
    db.close();
  }
}

main().catch((error) => {
  console.error("Error al consultar la base de datos:", error.message);
  process.exitCode = 1;
});
