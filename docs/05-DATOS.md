# 05 - Modelo de datos

## 1. Base de datos utilizada

Turnolibre utiliza **Turso**, un servicio de base de datos compatible con SQLite. La conexión se realiza mediante la biblioteca `@libsql/client`.

La configuración se encuentra en `src/lib/db.ts`. Los datos de conexión se obtienen desde las variables de entorno `TURSO_DATABASE_URL` y `TURSO_AUTH_TOKEN`.

## 2. Tabla principal: reservas

La aplicación utiliza una tabla denominada `reservas`, donde se almacena la información de cada turno solicitado por un cliente.

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | TEXT | Identificador único de la reserva. Es la clave primaria. |
| `codigo` | TEXT | Código utilizado para identificar y cancelar una reserva. |
| `salon` | TEXT | Nombre del salón seleccionado. |
| `servicio` | TEXT | Servicio solicitado. |
| `profesional` | TEXT | Profesional elegido. |
| `fecha` | TEXT | Fecha del turno. |
| `hora` | TEXT | Horario reservado. |
| `cliente` | TEXT | Nombre del cliente. |
| `contacto` | TEXT | Dato de contacto del cliente. |
| `estado` | TEXT | Estado de la reserva. Por defecto, `confirmada`. |
| `creadaEn` | TEXT | Fecha y hora en que se creó la reserva. |

Los campos `salon`, `servicio`, `profesional`, `fecha`, `hora`, `cliente`, `estado` y `creadaEn` son obligatorios. Los campos `codigo` y `contacto` admiten valores nulos.

## 3. Estructura de la tabla

La tabla se crea mediante la siguiente instrucción SQL:

```sql
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
);
```

## 4. Restricciones e índices

La base de datos utiliza índices únicos para proteger la integridad de las reservas.

**Índice de horarios activos**

```sql
CREATE UNIQUE INDEX IF NOT EXISTS idx_reservas_horario_activo
ON reservas (salon, profesional, fecha, hora)
WHERE estado != 'cancelada';
```

Este índice impide que se registren dos reservas activas para el mismo salón, profesional, fecha y hora. Cuando una reserva se cancela, el horario puede volver a utilizarse.

Antes de crear el índice, la aplicación comprueba si existen horarios activos duplicados. Si encuentra alguno, informa el problema y no crea el índice.

**Índice de códigos**

```sql
CREATE UNIQUE INDEX IF NOT EXISTS idx_reservas_codigo
ON reservas (codigo)
WHERE codigo IS NOT NULL;
```

Este índice evita que dos reservas tengan el mismo código. Permite que existan registros sin código mientras el campo sea nulo.

## 5. Inicialización y actualización

La función `initializeDatabase()` se encuentra en `src/lib/db.ts`.

Sus responsabilidades son:

- Crear la tabla `reservas` si todavía no existe.
- Comprobar si están presentes las columnas `contacto` y `codigo`.
- Agregar esas columnas cuando no existen, para mantener la compatibilidad con versiones anteriores de la tabla.
- Comprobar si hay horarios activos duplicados.
- Crear los índices únicos cuando corresponde.

## 6. Relación entre los datos

En la versión actual, los datos del salón, servicio y profesional se almacenan directamente en cada registro de la tabla `reservas`.

No se utilizan tablas independientes ni relaciones mediante claves foráneas para esos elementos. Tampoco se implementan tablas de usuarios o cuentas de clientes.

## 7. Conservación del historial

Cuando un cliente cancela un turno, el registro no se elimina de la base de datos. Se actualiza su campo `estado` a `cancelada`.

Esto permite conservar el historial de reservas y liberar el horario para que pueda ser reservado nuevamente.

## 8. Ejemplo ilustrativo de un registro

```json
{
  "id": "reserva-ejemplo",
  "codigo": "TL-ABC234",
  "salon": "Estilo Norte",
  "servicio": "Corte clásico",
  "profesional": "Profesional seleccionado",
  "fecha": "2026-11-05",
  "hora": "10:00",
  "cliente": "Cliente de ejemplo",
  "contacto": "Dato de contacto",
  "estado": "confirmada",
  "creadaEn": "2026-11-01T15:30:00.000Z"
}
```

Este registro es únicamente un ejemplo para mostrar la estructura de los datos; no corresponde a una reserva real.

## 9. Archivos relacionados

- `src/lib/db.ts`: conexión, creación e inicialización de la base de datos.
- `src/app/api/reservas/route.ts`: operaciones de consulta, creación y cancelación de reservas.
- `.env.local`: variables privadas para la conexión con Turso.
- `.env.example`: referencia de las variables necesarias para configurar la conexión, sin incluir credenciales reales.
