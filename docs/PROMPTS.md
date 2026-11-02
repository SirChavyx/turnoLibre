# Registro de trabajo con inteligencia artificial — turnoLibre

## 1. Propósito

Este documento registra el uso de herramientas de inteligencia artificial durante el desarrollo de turnoLibre. Su objetivo es mantener evidencia del proceso de trabajo, las decisiones tomadas, los errores detectados y las correcciones realizadas.

Se deben registrar hechos reales. No inventar resultados, errores, pruebas ni correcciones.

## 2. Herramientas utilizadas

- Claude: asistencia para analizar documentación, proponer soluciones y apoyar el desarrollo desde su página web.
- ChatGPT: apoyo para organizar tareas, revisar propuestas, explicar conceptos y documentar el proceso.
- Visual Studio Code: edición y revisión de los archivos del proyecto.
- PowerShell: ejecución de comandos y comprobación de resultados.
- Git: control de versiones y seguimiento de los cambios.

## 3. Registro de actividades

Para cada actividad relevante, completar los siguientes datos:

### Actividad [número]

- Fecha:
- Herramienta de IA:
- Objetivo:
- Contexto o archivos proporcionados:
- Instrucción o prompt utilizado:
- Resultado obtenido:
- Revisión realizada:
- Errores o limitaciones detectados:
- Correcciones aplicadas:
- Verificación posterior:
- Decisión final: aceptado, modificado o rechazado.
- Evidencia disponible: captura, archivo, salida de terminal o commit.

## 4. Registro de actividades realizadas

### Actividad 1 — Preparación del repositorio y documentación

- Fecha: 21 de octubre de 2026.
- Herramientas: ChatGPT, Visual Studio Code, PowerShell y Git.
- Objetivo: preparar la base documental y el control de versiones antes de crear la aplicación.
- Trabajo realizado: se inicializó Git, se creó `.gitignore` y se registraron documentos e imágenes de marca.
- Resultado verificable: commit local `2c37269`, con el mensaje "docs: establish turnoLibre project foundation".
- Verificación: `git status --short` no devolvió resultados y `git ls-files` enumeró 18 archivos.
- Errores detectados: no se registraron errores que impidieran completar esta actividad.
- Observaciones: Git mostró advertencias sobre finales de línea LF y CRLF en Windows. No se comprobó que estas advertencias hayan causado problemas.
- Decisión: se conservó el primer commit local.
- Evidencia: salidas de los comandos Git compartidas durante el trabajo.

### Actividad 2 — Creación de la memoria de trabajo

- Fecha: 21 de octubre de 2026.
- Herramienta: ChatGPT.
- Objetivo: crear un resumen persistente del contexto, el alcance, las tecnologías y las reglas de trabajo.
- Archivo: `memory.md`, en la raíz del proyecto.
- Resultado verificable: el archivo se creó y su contenido se comprobó con PowerShell.
- Errores detectados: no se informó ningún error durante la creación.
- Verificación: la salida de PowerShell mostró el contenido completo del archivo.
- Decisión: memoria creada y disponible para revisión y actualización.

### Actividad 3 — Procedimientos reutilizables y matriz de IA

- Fecha: 21 de octubre de 2026.
- Herramienta de IA: ChatGPT.
- Objetivo: preparar procedimientos reutilizables para especificar, clarificar y verificar tareas, y documentar el uso de IA en el TFI.
- Archivos creados: `procedimientos/spec.md`, `procedimientos/clarificar.md`, `procedimientos/verificar.md`, `procedimientos/verificar-criterios.md` y `docs/MATRIZ-IA.md`.
- Resultado verificable: se ejecutaron comandos de creación y se mostró el contenido de los archivos en PowerShell.
- Limitaciones: la revisión integral de la documentación y la incorporación de evidencias académicas adicionales siguen pendientes.
- Decisión: conservar los archivos para su revisión y actualización.

### Actividad 4 — Desarrollo de la aplicación

- Fecha: octubre de 2026; fecha exacta no consignada.
- Herramientas de IA: Claude y ChatGPT.
- Objetivo: desarrollar la aplicación web de reservas de turnos para peluquerías y barberías.
- Tecnologías: Next.js, React, TypeScript, Tailwind CSS y Turso mediante LibSQL.
- Trabajo realizado: desarrollo de la interfaz, selección de salones, servicios, profesionales, fechas y horarios; implementación de reservas, generación de códigos de confirmación y cancelaciones.
- Resultado verificable: aplicación funcional ejecutada localmente, con conexión a la base de datos.
- Revisión humana: se ejecutó la aplicación y se comprobaron las operaciones principales desde la interfaz.
- Decisiones: mantener una reserva sin registro obligatorio de clientes y utilizar un código de confirmación junto con un dato de contacto para cancelar.
- Evidencia: archivos de `src/`, configuración del proyecto y resultados de las pruebas locales.
- Estado: implementación principal realizada; ajustes pendientes.

### Actividad 5 — Migración de la aplicación a la carpeta principal

- Fecha: octubre de 2026; fecha exacta no consignada.
- Herramienta de IA: ChatGPT.
- Objetivo: integrar la aplicación desarrollada en `app-temporal` en la carpeta principal del repositorio.
- Trabajo realizado: traslado de `src/`, `public/`, `scripts/` y archivos de configuración; actualización de la documentación y del entorno.
- Resultado verificable: aplicación ejecutada desde la carpeta principal.
- Verificación: se ejecutó `npm.cmd run build` y se comprobó la compilación correcta.
- Limitaciones: se conservaron archivos de respaldo y se detectaron aspectos pendientes de revisión.
- Decisión: adoptar la carpeta principal como ubicación de la aplicación y conservar la versión anterior fuera del repositorio.
- Evidencia: estructura de carpetas, archivos de configuración y salida de compilación.

### Actividad 6 — Pruebas de reservas y cancelaciones

- Fecha: octubre de 2026; fecha exacta no consignada.
- Herramienta de IA: ChatGPT.
- Objetivo: comprobar el funcionamiento de las operaciones principales.
- Trabajo realizado: ejecución de reservas, cancelación mediante código y dato de contacto y comprobación de la liberación del horario.
- Resultado verificable: se realizó una reserva, se canceló desde la interfaz y el horario
 volvió a estar disponible.
- Revisión humana: se comprobó el resultado visualmente en la aplicación.
- Limitaciones detectadas: inconvenientes con la impresión del comprobante y una consulta de disponibilidad que requiere nuevas verificaciones.
- Decisión: conservar las funcionalidades comprobadas y dejar los inconvenientes registrados para su resolución.
- Evidencia: resultados observados durante las pruebas locales.

### Actividad 7 — Actualización de documentación y planificación

- Fecha: noviembre de 2026.
- Herramienta de IA: ChatGPT.
- Objetivo: adaptar las tareas al estado real de la aplicación y definir el alcance de la versión final.
- Trabajo realizado: actualización de docs/08-TAREAS.md, creación de .env.example, revisión del estado de Git y actualización de docs/MATRIZ-IA.md.
- Resultado verificable: archivos actualizados y salidas de PowerShell que permiten comprobar su contenido.
- Decisiones: conservar la aplicación anterior como respaldo, excluir las credenciales del repositorio y dejar las funciones administrativas y las cuentas de usuario fuera del alcance actual.
- Evidencia: archivos actualizados, comandos ejecutados y resultados compartidos durante el trabajo.
- Estado: realizado; revisión y cierre documental pendientes.

## 5. Criterios de registro

- Guardar el prompt completo cuando sea relevante para explicar una decisión o resultado.
- Diferenciar las propuestas de la IA de las decisiones tomadas por el responsable del proyecto.
- Conservar los errores reales y explicar su resolución.
- Indicar qué pruebas se ejecutaron y cuáles quedan pendientes.
- Relacionar los cambios importantes con sus archivos y commits cuando corresponda.
- No incluir contraseñas, claves API, datos personales innecesarios ni secretos.
- Actualizar este documento durante el desarrollo, no solamente al finalizar.

## 6. Pendientes

- Incorporar los prompts originales de implementación cuando estén disponibles.
- Completar el registro de las revisiones de código.
- Incorporar capturas de la aplicación y de las pruebas realizadas.
- Documentar las correcciones que se realicen sobre los problemas detectados.
- Registrar las pruebas adicionales de disponibilidad y seguridad.
- Incorporar evidencias de publicación si se realiza el despliegue.
- Utilizar los registros como material de apoyo para el informe académico y la defensa del TFI.
