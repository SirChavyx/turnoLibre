# Turnolibre App

**Tu turno, sin vueltas.**

Turnolibre es una aplicación web desarrollada como prototipo académico para realizar reservas de turnos en peluquerías y barberías.

Permite consultar servicios y profesionales, seleccionar una fecha y un horario, registrar una reserva y cancelar un turno mediante un código de confirmación y un dato de contacto.

## Tecnologías utilizadas

- **Next.js 16:** framework para el desarrollo de la aplicación web.
- **React 19:** biblioteca para construir la interfaz.
- **TypeScript:** lenguaje utilizado para el desarrollo.
- **Tailwind CSS 4:** herramienta para los estilos y el diseño adaptable.
- **Turso:** servicio de base de datos en la nube.
- **LibSQL:** cliente utilizado para conectarse con la base de datos.
- **Git y GitHub:** herramientas para el control de versiones y el almacenamiento del código.

## Funcionalidades implementadas

- Visualización de salones de peluquería y barbería de ejemplo.
- Consulta de servicios y profesionales.
- Búsqueda y filtrado de salones.
- Selección de fecha y horario.
- Consulta de disponibilidad según salón, profesional y fecha.
- Registro de reservas en la base de datos.
- Generación de un código de confirmación para cada reserva.
- Prevención de reservas duplicadas para un mismo profesional, fecha y horario.
- Cancelación de turnos mediante el código de reserva y el teléfono de contacto.
- Liberación del horario cuando una reserva se cancela.
- Diseño adaptable a computadoras, tablets y celulares.

## Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js.
- npm.
- Una base de datos creada en Turso.
- Las credenciales de conexión correspondientes.

## Instalación

1. Clonar o descargar el repositorio.
2. Abrir una terminal en la carpeta principal del proyecto.
3. Instalar las dependencias:

```powershell
npm.cmd install
```

4. Crear un archivo llamado `.env.local` en la carpeta principal del proyecto.
5. Configurar las variables de conexión con Turso:

```env
TURSO_DATABASE_URL=URL_DE_TU_BASE_DE_DATOS
TURSO_AUTH_TOKEN=TOKEN_DE_TU_BASE_DE_DATOS
```

Reemplazar los valores de ejemplo por las credenciales correspondientes. No compartirlas ni publicarlas.

## Ejecución en desarrollo

Para iniciar el servidor local:

```powershell
npm.cmd run dev
```

Luego, abrir el navegador en:

http://localhost:3000

Para detener el servidor, presionar `Ctrl + C` en la terminal.

## Comprobaciones del proyecto

Para comprobar que la aplicación puede compilarse:

```powershell
npm.cmd run build
```

Para revisar el código con ESLint:

```powershell
npm.cmd run lint
```

## Ejecución en producción

Después de compilar correctamente el proyecto, se puede iniciar el servidor de producción en el entorno local mediante:

```powershell
npm.cmd run start
```

## Estructura principal del proyecto

```text
turnolibre/
├── docs/
├── marca/
├── public/
│   └── marca/
├── scripts/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reservas/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ReservaForm.tsx
│   └── lib/
│       └── db.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

El archivo `.env.local` se crea localmente y no debe incorporarse al repositorio.

## Base de datos

La aplicación utiliza Turso para almacenar las reservas.

La tabla principal se denomina `reservas` y contiene información sobre:

- Identificador y código de reserva.
- Salón y servicio seleccionado.
- Profesional asignado.
- Fecha y hora del turno.
- Nombre del cliente y dato de contacto.
- Estado de la reserva.
- Fecha de creación.

La aplicación inicializa la estructura de la tabla y verifica la existencia de algunas columnas e índices necesarios para controlar las reservas activas y evitar códigos duplicados.

Las reservas canceladas se conservan como historial y sus horarios vuelven a estar disponibles.

## Seguridad

Las credenciales de conexión con Turso se guardan en `.env.local`.

Este archivo está excluido del control de versiones mediante `.gitignore`. No debe publicarse en GitHub ni compartirse con terceros.

El proyecto utiliza validaciones en el servidor y consultas SQL parametrizadas para proteger las operaciones con la base de datos.

## Alcance del proyecto

La versión actual permite consultar la disponibilidad, registrar reservas y cancelar turnos.

No incluye registro de usuarios, inicio de sesión, panel de administración, gestión de comercios ni procesamiento de pagos. Estas funcionalidades quedan fuera del alcance de esta versión.

Los salones, servicios y precios mostrados son datos de ejemplo utilizados para el prototipo académico.

## Información académica

Proyecto desarrollado como Trabajo Final Integrador de la Tecnicatura Superior en Desarrollo de Software.

**Turnolibre App — Tu turno, sin vueltas.**