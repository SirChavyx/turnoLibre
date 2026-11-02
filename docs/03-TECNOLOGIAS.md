# 03-TECNOLOGÍAS — ¿Con qué lo construimos?

## Stack tecnológico implementado

| Capa | Tecnología | Uso en el proyecto |
|---|---|---|
| Frontend y servidor | Next.js 16.4.3 | Permite desarrollar la interfaz y las rutas del servidor dentro del mismo proyecto. |
| Interfaz | React 19.3.0 | Construcción de componentes y elementos interactivos. |
| Lenguaje | TypeScript 5 | Desarrollo con tipado estático y detección de errores. |
| Estilos | Tailwind CSS 4 | Diseño de la interfaz y adaptación a distintos tamaños de pantalla. |
| Base de datos | Turso | Almacenamiento de las reservas mediante una base de datos compatible con SQLite. |
| Acceso a datos | LibSQL (`@libsql/client`) | Conexión y ejecución de consultas sobre la base de datos. |
| Control de versiones | Git y GitHub | Seguimiento de cambios y conservación del código fuente. |
| Publicación prevista | Vercel | Plataforma considerada para publicar la aplicación. |
| Inteligencia artificial | Claude y ChatGPT | Asistencia en la generación, revisión y documentación del código. |

## Herramientas de desarrollo

| Herramienta | Versión utilizada |
|---|---|
| Node.js | 20.12.2 |
| npm | 10.5.0 |
| Git | 2.45.2 |
| Next.js | 16.4.3 |
| React | 19.3.0 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| ESLint | 9.x |
| @libsql/client | 0.18.x |

Las versiones corresponden al entorno y las dependencias registradas durante el desarrollo del proyecto.

## Base de datos

Se utiliza Turso como servicio de base de datos y LibSQL como mecanismo de conexión.

La aplicación almacena los datos de las reservas, entre ellos:

- Código de confirmación.
- Salón y servicio seleccionado.
- Profesional.
- Fecha y horario.
- Nombre y contacto del cliente.
- Estado de la reserva.
- Fecha de creación.

Las consultas y operaciones se realizan desde el servidor mediante `@libsql/client`.

Se conserva el historial de las reservas canceladas. Al cancelar una reserva, se actualiza su estado y el horario vuelve a estar disponible.

## Instalación y ejecución

Para instalar las dependencias del proyecto:

```bash
npm install
```

Para iniciar el entorno de desarrollo:

```bash
npm run dev
```

Para comprobar la compilación de producción:

```bash
npm run build
```

Para ejecutar la versión compilada:

```bash
npm run start
```

La aplicación requiere configurar las variables de entorno de conexión a Turso en el archivo `.env.local`. Este archivo contiene credenciales privadas y no debe incorporarse al repositorio.

El archivo `.env.example` permite identificar las variables necesarias sin exponer sus valores.

## Tecnologías previstas inicialmente y no implementadas

Durante la planificación inicial se consideraron otras herramientas que finalmente no se incorporaron a la versión actual:

- PostgreSQL y Prisma: reemplazados por Turso y LibSQL.
- Auth.js: no se implementó un sistema de registro e inicio de sesión.
- Zod: no figura entre las dependencias actuales.
- Resend: no se implementó el envío de correos electrónicos.

Estas herramientas no forman parte del funcionamiento actual de la aplicación y quedan fuera del alcance de esta entrega.

## Alcance tecnológico

La versión desarrollada permite consultar salones, servicios, profesionales y horarios disponibles; registrar reservas y cancelarlas mediante un código de confirmación y un dato de contacto.

No incluye cuentas de usuario, panel administrativo, gestión de servicios y profesionales ni envío automático de recordatorios.

Las tecnologías y funcionalidades podrán ampliarse en futuras versiones, siempre que se justifique su incorporación y se actualice la documentación correspondiente.

## Reglas sobre el stack

- No incorporar dependencias nuevas sin justificar su necesidad.
- Mantener las dependencias registradas en `package.json` y `package-lock.json`.
- No incluir credenciales ni claves privadas en el repositorio.
- Verificar la compatibilidad de las herramientas antes de actualizar sus versiones.
- Documentar los cambios importantes en la matriz de uso de IA (`docs/MATRIZ-IA.md`) y en el registro de tareas (`docs/08-TAREAS.md`).