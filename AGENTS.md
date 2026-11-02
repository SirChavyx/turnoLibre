# AGENTS.md — turnoLibre

> Índice y reglas para cualquier agente de inteligencia artificial que trabaje en este proyecto.
> **Leer este archivo y la documentación relacionada antes de modificar código.**

## ¿Qué es turnoLibre?

**turnoLibre** es una aplicación web responsive para consultar la disponibilidad de peluquerías y barberías, seleccionar servicios, profesionales y horarios, y registrar o cancelar reservas.

- **Eslogan:** *Tu turno, sin vueltas.*
- **Tipo de proyecto:** aplicación web responsive, con enfoque mobile first.
- **Estado:** aplicación desarrollada en etapa de pruebas y revisión.
- **Alcance actual:** consulta de disponibilidad, registro de reservas y cancelación mediante código y dato de contacto.
- **Datos:** los establecimientos, servicios, profesionales y precios utilizados son ejemplos ficticios.

La versión actual no incluye cuentas de usuario, panel de administración ni gestión de agendas, servicios o profesionales.

## Tecnologías

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Turso (SQLite en la nube)
- LibSQL (`@libsql/client`)
- Node.js y npm
- Git y GitHub

No cambiar el stack ni agregar dependencias sin autorización y sin actualizar la documentación correspondiente.

## Archivos de especificación

Cada archivo de `docs/` responde una pregunta. Consultalos según la tarea:

| Archivo | Contenido |
|---|---|
| `docs/00-CONSTITUCION.md` | Principios y reglas generales del proyecto |
| `docs/01-CONTEXTO.md` | Problema, objetivos y destinatarios |
| `docs/02-REQUERIMIENTOS.md` | Funcionalidades y alcance del sistema |
| `docs/03-TECNOLOGIAS.md` | Tecnologías y dependencias |
| `docs/04-ARQUITECTURA.md` | Organización del código |
| `docs/05-DATOS.md` | Estructura de datos |
| `docs/06-DISENO-UI.md` | Diseño de interfaz |
| `docs/07-CONVENCIONES.md` | Convenciones de desarrollo |
| `docs/08-TAREAS.md` | Orden y seguimiento del trabajo |
| `docs/09-SEO.md` | Posicionamiento y metadatos |
| `docs/10-SEGURIDAD.md` | Seguridad y protección de datos |
| `docs/IDENTIDAD-MARCA.md` | Identidad visual y tono de comunicación |
| `docs/MATRIZ-IA.md` | Registro de actividades y uso de IA |
| `docs/PROMPTS.md` | Registro de prompts y resultados relevantes |

## Reglas generales

### Qué hacer

- Leer la Constitución y la documentación relacionada con la tarea antes de modificar código.
- Trabajar una tarea de `docs/08-TAREAS.md` por vez y actualizar su estado cuando corresponda.
- Identificar el requerimiento que respalda cada funcionalidad.
- Respetar la identidad de marca.
- Escribir el código en inglés y los textos visibles en español rioplatense, utilizando voseo.
- Validar los datos en el servidor y en el cliente cuando corresponda.
- Consultar ante instrucciones ambiguas o contradictorias.
- Probar los cambios antes de considerarlos terminados.
- Mantener la aplicación compatible con el entorno y las tecnologías instaladas.
- Documentar los cambios importantes en los archivos correspondientes.
- Mantener al estudiante como responsable de las decisiones y de la validación final.

### Qué no hacer

- No inventar funcionalidades fuera de los requerimientos.
- No implementar elementos excluidos del alcance.
- No agregar dependencias ni cambiar el stack sin autorización.
- No utilizar colores ni tipografías ajenos a la identidad de marca.
- No subir claves, contraseñas ni archivos `.env`.
- No guardar datos de tarjetas ni contraseñas en texto plano.
- No utilizar nombres, logos ni datos de peluquerías reales en los ejemplos.
- No declarar pruebas ejecutadas si no existen resultados que las respalden.
- No modificar ni eliminar datos de la base de datos sin autorización.

## Alcance funcional actual

La aplicación permite:

- Consultar establecimientos de ejemplo.
- Buscar y filtrar peluquerías y barberías.
- Consultar servicios, profesionales y precios ilustrativos.
- Seleccionar fecha y horario disponible.
- Registrar una reserva.
- Generar un código de confirmación.
- Consultar la disponibilidad de horarios.
- Cancelar una reserva mediante código y dato de contacto, respetando el límite establecido.

No forman parte de la versión actual:

- Registro e inicio de sesión.
- Cuentas de clientes o propietarios.
- Panel de administración.
- Gestión de establecimientos, servicios y profesionales.
- Administración de agendas y horarios.
- Reprogramación de turnos.
- Recordatorios automáticos.
- Pagos en línea.
- Reseñas y estadísticas.

Estas funciones podrán evaluarse como mejoras futuras, pero no deben implementarse sin una decisión previa y una actualización de los documentos del proyecto.

## Reglas específicas de Next.js

<!-- BEGIN:nextjs-agent-rules -->

Esta versión de Next.js puede incluir cambios importantes en sus API, convenciones y estructura.

Antes de modificar código, consultar la guía correspondiente dentro de `node_modules/next/dist/docs/`. No asumir que la documentación de versiones anteriores sigue siendo válida.

Este bloque puede ser regenerado por Next.js al ejecutar el servidor de desarrollo. Conservarlo al actualizar este archivo.

<!-- END:nextjs-agent-rules -->

## Comandos útiles

Ejecutar desde la carpeta principal del proyecto:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

Para iniciar la aplicación en modo producción, después de compilar:

```powershell
npm.cmd run start
```

Servidor local: `http://localhost:3000`.

## Consideraciones de seguridad

- No mostrar ni compartir el contenido de `.env.local`.
- No incluir credenciales en el código fuente.
- Mantener las variables de entorno fuera del repositorio.
- Utilizar `.env.example` únicamente como referencia de nombres de variables, sin valores secretos.
- Utilizar consultas parametrizadas para interactuar con la base de datos.
- Validar los datos recibidos por las rutas de la API.
- Verificar las operaciones de reserva y cancelación antes de modificar la base de datos.
- Mantener la integridad de las reservas y evitar horarios duplicados.
- No afirmar que el sistema cuenta con autenticación, permisos por roles o protección contra ataques que todavía no fueron implementados y comprobados.

## Verificación del trabajo

Antes de dar por terminada una tarea:

1. Revisar los cambios realizados.
2. Ejecutar las pruebas que correspondan.
3. Ejecutar lint y compilación cuando la modificación lo requiera.
4. Comprobar el funcionamiento real de la aplicación.
5. Registrar los resultados y los pendientes en la documentación.

Si una instrucción contradice la Constitución, los requerimientos o la arquitectura, detenerse y consultar antes de realizar cambios importantes.