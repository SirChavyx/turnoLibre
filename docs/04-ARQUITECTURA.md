# 04-ARQUITECTURA — ¿Cómo se organiza el código?

## Árbol de carpetas

La aplicación utiliza la estructura de carpetas de Next.js con App Router. El código principal se encuentra dentro de `src/`.

```text
turnolibre/
├── public/
│   ├── marca/
│   │   ├── logo-banner.png
│   │   ├── logo1.png
│   │   └── logo2.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reservas/
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ReservaForm.tsx
│   └── lib/
│       └── db.ts
├── docs/
├── scripts/
├── .env.example
├── .gitignore
├── AGENTS.md
├── package.json
├── package-lock.json
└── README.md
```

## Función de cada parte

| Carpeta o archivo | Función |
|---|---|
| `public/` | Contiene los recursos estáticos utilizados por la aplicación. |
| `public/marca/` | Almacena los logotipos y elementos gráficos de turnoLibre. |
| `src/app/` | Contiene las páginas, el diseño general y los estilos globales de Next.js. |
| `src/app/page.tsx` | Presenta la página principal de la aplicación. |
| `src/app/layout.tsx` | Define la estructura general que comparten las páginas. |
| `src/app/globals.css` | Contiene los estilos globales. |
| `src/app/api/reservas/route.ts` | Gestiona las consultas de disponibilidad, la creación y la cancelación de reservas. |
| `src/components/` | Contiene los componentes reutilizables de la interfaz. |
| `src/components/ReservaForm.tsx` | Gestiona el formulario y la interacción del usuario durante el proceso de reserva. |
| `src/lib/` | Contiene módulos de lógica y servicios compartidos. |
| `src/lib/db.ts` | Configura la conexión con Turso mediante LibSQL y prepara la estructura de la base de datos. |
| `docs/` | Reúne la documentación técnica y los registros del proyecto. |
| `scripts/` | Contiene scripts auxiliares del proyecto. |
| `.env.example` | Identifica las variables de entorno necesarias sin exponer credenciales. |
| `.gitignore` | Define los archivos y carpetas que Git no debe incorporar al repositorio. |

## Funcionamiento general

La arquitectura se organiza en tres partes principales:

1. **Interfaz:** permite al usuario consultar los salones, seleccionar servicios, profesionales, fechas y horarios, y completar una reserva.
2. **API:** recibe las solicitudes, valida los datos, consulta la disponibilidad y ejecuta las operaciones correspondientes.
3. **Base de datos:** almacena las reservas y conserva su historial, incluidos los registros cancelados.

## Flujo de una reserva

```text
Usuario
   |
   v
Página principal
   |
   v
ReservaForm.tsx
   |
   v
API /api/reservas
   |
   v
Validación de datos
   |
   v
Consulta de disponibilidad
   |
   v
Base de datos Turso
   |
   v
Confirmación de la reserva
```

## Operaciones de la API

La ruta `src/app/api/reservas/route.ts` concentra las operaciones principales:

| Método HTTP | Operación | Descripción |
|---|---|---|
| GET | Consultar disponibilidad | Obtiene los horarios ocupados según el salón, profesional y fecha seleccionados. |
| POST | Crear reserva | Valida los datos, verifica que el horario esté disponible y registra la reserva. |
| DELETE | Cancelar reserva | Comprueba el código de confirmación y el dato de contacto, y actualiza el estado de la reserva. |

Cuando se cancela una reserva, el registro no se elimina de la base de datos. Se actualiza su estado y el horario vuelve a estar disponible para otra persona.

## Reglas de arquitectura

- La interfaz y la lógica del servidor se mantienen separadas.
- Los componentes de interfaz no acceden directamente a la base de datos.
- Las operaciones de almacenamiento se realizan desde el servidor.
- La conexión con Turso se centraliza en `src/lib/db.ts`.
- La API verifica la disponibilidad antes de registrar una reserva.
- Se evita que dos reservas activas ocupen el mismo horario para un mismo salón y profesional.
- Las credenciales de conexión se mantienen en variables de entorno y no deben publicarse en el repositorio.

## Alcance de la arquitectura

La arquitectura actual está orientada a la consulta, creación y cancelación de reservas.

No incluye módulos de autenticación, registro de usuarios, panel administrativo, gestión de profesionales ni envío de correos electrónicos. Estas funcionalidades quedan fuera del alcance de la versión desarrollada.
