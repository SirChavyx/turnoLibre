# Constitución del proyecto turnoLibre

## Propósito

turnoLibre es una aplicación web responsive que permite consultar la disponibilidad de peluquerías y barberías, seleccionar servicios, profesionales y horarios, y registrar o cancelar reservas.

El proyecto busca facilitar la organización de turnos mediante una herramienta sencilla, clara y accesible.

**Eslogan:** Tu turno, sin vueltas.

Estos principios orientan el trabajo de las personas y los agentes de inteligencia artificial que participan en el proyecto.

## Principios

### 1. Respetar el alcance definido

Toda funcionalidad debe estar respaldada por `docs/01-CONTEXTO.md` o `docs/02-REQUERIMIENTOS.md`.

Las funcionalidades de administración de locales, servicios, profesionales y agendas, así como las cuentas de usuario, se consideran fuera del alcance de la versión actual.

**Verificación:** antes de implementar una funcionalidad, identificar el requerimiento relacionado. Si no existe o hay contradicciones, consultar antes de programar.

### 2. Trabajar con especificaciones antes de programar

Cada funcionalidad debe contar con una descripción clara, criterios de aceptación y tareas comprobables antes de comenzar su implementación.

**Verificación:** no iniciar una modificación importante sin definir qué debe hacer, cómo se comprobará y qué archivos podrían verse afectados.

### 3. Proteger la integridad de las reservas

El sistema debe impedir que un mismo profesional tenga dos reservas activas para el mismo horario. La comprobación debe realizarse en el servidor y contar con mecanismos de protección frente a solicitudes simultáneas.

**Verificación:** comprobar los horarios ocupados, la disponibilidad y las restricciones de la base de datos. No considerar resuelta esta regla únicamente porque la interfaz oculte horarios ocupados.

### 4. Priorizar la seguridad y la privacidad

Los datos ingresados deben validarse en el servidor. Las consultas a la base de datos deben utilizar parámetros y las credenciales deben mantenerse fuera del repositorio.

La versión actual no implementa cuentas, contraseñas ni permisos por roles. Si estas funciones se incorporan en el futuro, deberán definirse sus medidas de autenticación y autorización antes de desarrollarlas.

**Verificación:** revisar las validaciones, las consultas, el tratamiento de los datos personales y la ausencia de credenciales en los archivos versionados.

### 5. Mantener coherencia técnica y visual

Respetar las tecnologías de `docs/03-TECNOLOGIAS.md`, la arquitectura de `docs/04-ARQUITECTURA.md`, las convenciones de `docs/07-CONVENCIONES.md` y la identidad definida en `docs/IDENTIDAD-MARCA.md`.

La interfaz debe mantener los colores de la marca, utilizar textos en español rioplatense con voseo y priorizar el diseño adaptable a celulares y computadoras.

**Verificación:** revisar los archivos modificados, los estilos, las dependencias y el funcionamiento en distintos tamaños de pantalla. Toda modificación del stack debe justificarse y documentarse antes de aplicarse.

### 6. Comprobar los resultados antes de declarar una tarea terminada

Una tarea no se considera completa por el solo hecho de generar código. Debe cumplir sus criterios de aceptación y superar las pruebas correspondientes.

**Verificación:** ejecutar las pruebas disponibles y, cuando corresponda, las comprobaciones de lint y compilación. Registrar los errores encontrados y corregirlos antes de dar la tarea por terminada.

### 7. Utilizar la inteligencia artificial de forma responsable

La inteligencia artificial puede proponer, generar y revisar código, pero sus resultados deben ser examinados por el estudiante. No se deben aceptar como verdaderas sus explicaciones, resultados de pruebas o afirmaciones de seguridad sin evidencia verificable.

**Verificación:** revisar los cambios antes de incorporarlos, ejecutar las pruebas en el entorno real y registrar en `docs/PROMPTS.md` los prompts relevantes, los errores reales de la IA y las correcciones humanas. No inventar evidencias ni declarar ejecutadas pruebas que no se realizaron.

## Regla de cumplimiento

Si una instrucción contradice estos principios o los documentos del proyecto, el agente debe detenerse, explicar la contradicción y solicitar una decisión antes de realizar cambios que afecten el alcance, la arquitectura, la seguridad o los datos.

El objetivo es construir una aplicación funcional, comprobable, segura y documentada, manteniendo al estudiante como responsable de las decisiones y de la validación final.

## Alcance de esta constitución

Esta constitución establece los criterios de trabajo para la versión actual de turnoLibre. Las funcionalidades que se encuentran fuera del alcance podrán evaluarse como mejoras futuras, pero no deben considerarse implementadas ni incorporarse sin una decisión previa.