# Matriz de uso de inteligencia artificial — turnoLibre

## 1. Propósito

Registrar cómo se utiliza la inteligencia artificial durante el desarrollo del TFI, qué decisiones toma el responsable del proyecto y qué evidencias permiten comprobar las actividades realizadas.

La matriz distingue las propuestas de la IA de las decisiones aceptadas por el responsable. También diferencia las pruebas sugeridas de aquellas que efectivamente se ejecutaron.

## 2. Matriz de actividades

| Actividad | Uso de IA | Intervención y revisión humana | Evidencia disponible | Estado |
|---|---|---|---|---|
| Preparación de la documentación y del repositorio | Asistencia para organizar documentos y preparar el control de versiones | Se ejecutaron comandos y se revisaron los resultados de Git | Commit local `2c37269`; registro en `docs/PROMPTS.md` | Realizado |
| Creación de la memoria de trabajo | Asistencia para resumir el contexto, las reglas y el alcance del proyecto | Se comprobó el contenido de `memory.md` | Archivo `memory.md`; commit local `5a591a2` | Realizado |
| Creación de procedimientos reutilizables | Asistencia para redactar instrucciones de especificación, aclaración y verificación | Se ejecutaron comandos de creación y se inspeccionaron los archivos | Carpeta `procedimientos/` | Realizado; revisión integral pendiente |
| Organización de las tareas | Asistencia para reorganizar y adaptar la planificación al alcance real de la aplicación | Se revisaron las tareas y se actualizaron los estados según las evidencias disponibles | `docs/08-TAREAS.md`; salidas de PowerShell | Realizado; seguimiento pendiente |
| Desarrollo de la aplicación | Asistencia de IA para implementar y revisar componentes y funcionalidades | Se integraron los archivos en la carpeta principal y se probaron las funciones principales | Código en `src/`, recursos en `public/`, configuración y conexión con Turso | Implementación principal realizada; ajustes pendientes |
| Configuración de la base de datos | Asistencia para implementar la conexión, las consultas y las operaciones de reservas | Se comprobó el funcionamiento de la aplicación con la base de datos | `src/lib/db.ts` y `src/app/api/reservas/route.ts` | Realizado; revisión de integridad pendiente |
| Migración de la aplicación | Asistencia para trasladar la aplicación desde `app-temporal` a la carpeta principal | Se copiaron los archivos, se comprobó su presencia y se ejecutó la aplicación desde la raíz. Se conservó una copia de respaldo fuera del repositorio | Carpetas `src/`, `public/`, `scripts/` y configuración de la raíz; carpeta externa `turnolibre-resguardos` | Realizado |
| Pruebas de funcionamiento | Asistencia para interpretar resultados y orientar las verificaciones | Se ejecutaron pruebas de compilación, reservas, cancelaciones y liberación de horarios | Resultado de `npm.cmd run build` y pruebas locales de la aplicación | Parcialmente realizado |
| Revisión de errores y ajustes | Asistencia para analizar problemas detectados durante las pruebas | Se identificaron inconvenientes en la impresión del comprobante y en una consulta de disponibilidad | Resultados observados durante las pruebas locales | Pendiente de resolución |
| Publicación | Asistencia prevista para configurar y verificar el despliegue | Todavía no se cuenta con evidencia de una publicación verificada | Pendiente | Pendiente |

## 3. Decisiones tomadas durante el desarrollo

- Se eligió Next.js, React, TypeScript y Tailwind CSS para desarrollar la interfaz.
- Se utilizó Turso con LibSQL para almacenar las reservas.
- Se adaptó la aplicación para que los clientes puedan reservar sin crear una cuenta.
- Se incorporó la cancelación mediante un código de reserva y un dato de contacto.
- Se decidió conservar el historial de reservas canceladas y liberar sus horarios.
- Se dejó fuera del alcance de esta versión la administración de salones, las cuentas de usuarios y otras funciones previstas inicialmente.
- Se trasladó la aplicación a la carpeta principal del repositorio y se conservó la versión anterior como respaldo.

Estas decisiones fueron revisadas y aceptadas durante el desarrollo del proyecto.

## 4. Criterios de evaluación

- La IA puede proponer textos, estructuras, explicaciones y soluciones técnicas.
- El responsable del proyecto revisa los resultados y decide qué aceptar, modificar o rechazar.
- Los comandos se consideran ejecutados únicamente cuando existe una salida u otra evidencia que lo respalde.
- Los archivos creados no se consideran automáticamente correctos por el solo hecho de existir.
- Las pruebas, los errores, las correcciones y los resultados se registran tal como ocurrieron.
- No se incorporan credenciales, claves, contraseñas ni datos personales innecesarios.
- Las funcionalidades pendientes no se presentan como implementadas.

## 5. Evidencias pendientes de incorporar

- Capturas de la aplicación en funcionamiento.
- Evidencias de creación y cancelación de reservas.
- Capturas o registros de las pruebas de disponibilidad.
- Registro más detallado de los prompts utilizados durante la implementación.
- Revisión completa de la documentación en Visual Studio Code.
- Evidencias de pruebas en distintos dispositivos.
- Evidencias de publicación, si se realiza el despliegue.

## 6. Actualización

Esta matriz debe mantenerse coordinada con `docs/PROMPTS.md` y `docs/08-TAREAS.md`.

Cada actividad se marcará como realizada cuando exista evidencia suficiente. Los problemas detectados y las funciones pendientes deben quedar registrados para que el informe y la defensa representen el estado real del proyecto.