# Registro de trabajo con inteligencia artificial — turnoLibre

## 1. Propósito

Este documento registra el uso de herramientas de inteligencia artificial durante el desarrollo de turnoLibre. Su objetivo es mantener evidencia del proceso de trabajo, las decisiones tomadas, los errores detectados y las correcciones realizadas.

Se deben registrar hechos reales. No inventar resultados, errores, pruebas ni correcciones.

## 2. Herramientas utilizadas

- Claude: asistencia para analizar documentación, proponer soluciones y apoyar el desarrollo desde su página web.
- ChatGPT: apoyo para organizar tareas, revisar propuestas, explicar conceptos y documentar el proceso.
- Visual Studio Code: edición y revisión de los archivos del proyecto.
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

## 4. Registro inicial

### Actividad 1 — Preparación del repositorio y documentación

- Fecha: 21 de octubre de 2026.
- Herramientas: ChatGPT, Visual Studio Code, PowerShell y Git.
- Objetivo: preparar la base documental y el control de versiones antes de crear la aplicación.
- Trabajo realizado: se inicializó Git, se creó .gitignore y se registraron documentos e imágenes de marca.
- Resultado verificable: commit local 2c37269, con el mensaje "docs: establish turnoLibre project foundation".
- Verificación: git status --short no devolvió resultados y git ls-files enumeró 18 archivos.
- Errores detectados: no se registraron errores que impidieran completar esta actividad.
- Observaciones: Git mostró advertencias sobre finales de línea LF y CRLF en Windows. No se comprobó que estas advertencias hayan causado problemas.
- Decisión: se conservó el primer commit local.
- Evidencia: salida de los comandos git init, git commit, git status --short y git ls-files compartida durante el trabajo.

### Actividad 2 — Creación de la memoria de trabajo

- Fecha: 21 de octubre de 2026.
- Herramienta: ChatGPT.
- Objetivo: crear un resumen persistente del contexto, el alcance, las tecnologías y las reglas de trabajo.
- Archivo: memory.md, en la raíz del proyecto.
- Resultado verificable: el archivo se creó y su contenido se comprobó con Get-Content -Encoding UTF8 .\memory.md.
- Errores detectados: no se informó ningún error durante la creación.
- Verificación: la salida de PowerShell mostró el contenido completo del archivo.
- Decisión: memoria creada; queda disponible para revisión y actualización conforme avance el proyecto.


### Actividad 3 — Procedimientos reutilizables y matriz de IA

- Fecha: 21 de octubre de 2026.
- Herramienta de IA: ChatGPT.
- Objetivo: preparar procedimientos reutilizables para especificar, clarificar y verificar tareas, y documentar el uso de IA en el TFI.
- Archivos creados: `procedimientos/spec.md`, `procedimientos/clarificar.md`, `procedimientos/verificar.md`, `procedimientos/verificar-criterios.md` y `docs/MATRIZ-IA.md`.
- Resultado verificable: se ejecutaron comandos de creación y se mostró el contenido de los cuatro procedimientos y de la matriz en PowerShell.
- Limitaciones: la revisión integral de la documentación y la incorporación de evidencias académicas adicionales siguen pendientes.
- Decisión: conservar los archivos para su revisión y actualización.
## 5. Criterios de registro

- Guardar el prompt completo cuando sea relevante para explicar una decisión o resultado.
- Diferenciar las propuestas de la IA de las decisiones tomadas por el responsable del proyecto.
- Conservar los errores reales y explicar su resolución.
- Indicar qué pruebas se ejecutaron y cuáles quedan pendientes.
- Relacionar los cambios importantes con sus archivos y commits cuando corresponda.
- No incluir contraseñas, claves API, datos personales innecesarios ni secretos.
- Actualizar este documento durante el desarrollo, no solamente al finalizar.

## 6. Pendientes

- Registrar las instrucciones y resultados de las siguientes actividades.
- Documentar la preparación de los procedimientos de especificación, aclaración y verificación.
- Registrar los prompts de implementación y las revisiones de código.
- Incorporar evidencias reales de pruebas, errores y correcciones.
- Utilizar los registros como material de apoyo para el informe académico y la defensa del TFI.
