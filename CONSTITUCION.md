# Constitución del proyecto turnoLibre

## Propósito

turnoLibre es una aplicación web responsive para que los clientes reserven turnos en peluquerías y barberías, y los responsables de cada local administren sus servicios, profesionales y agendas.

**Eslogan:** Tu turno, sin vueltas.

Estos principios son obligatorios para las personas y los agentes de IA que trabajen en el proyecto.

## Principios

### 1. Respetar el alcance definido

Toda funcionalidad debe estar respaldada por `docs/01-CONTEXTO.md` o `docs/02-REQUERIMIENTOS.md`.

**Verificación:** antes de implementar una funcionalidad, identificar el requerimiento relacionado. Si no existe o hay contradicciones, consultar antes de programar.

### 2. Trabajar con especificaciones antes de programar

Cada funcionalidad debe tener criterios de aceptación claros, un plan de implementación y tareas comprobables antes de escribir el código.

**Verificación:** no iniciar la implementación de una funcionalidad sin una especificación revisada y criterios que permitan determinar si está terminada.

### 3. Proteger la integridad de las reservas

El sistema debe impedir que un mismo profesional tenga dos turnos activos superpuestos. La comprobación debe realizarse en el servidor y considerar las solicitudes simultáneas.

**Verificación:** ejecutar pruebas de horarios ocupados, límites de duración y solicitudes concurrentes. No considerar resuelta esta regla solo porque la interfaz oculte horarios ocupados.

### 4. Priorizar la seguridad y la privacidad

Los datos deben validarse en el cliente y en el servidor. Las contraseñas nunca se almacenarán en texto plano, las rutas privadas deben verificar permisos y las credenciales deben mantenerse fuera del repositorio.

**Verificación:** revisar las validaciones, los permisos por rol, el almacenamiento de contraseñas y la ausencia de secretos en los archivos versionados.

### 5. Mantener coherencia técnica y visual

Respetar las tecnologías de `docs/03-TECNOLOGIAS.md`, la arquitectura de `docs/04-ARQUITECTURA.md`, las convenciones de `docs/07-CONVENCIONES.md` y la identidad definida en `docs/IDENTIDAD-MARCA.md`.

La interfaz utilizará los colores y tipografías de la marca, textos en español rioplatense con voseo y un diseño mobile first.

**Verificación:** revisar los archivos modificados, los estilos, las dependencias y el funcionamiento desde un celular y una computadora. Toda modificación del stack debe justificarse y documentarse antes de aplicarse.

### 6. Comprobar los resultados antes de declarar una tarea terminada

Una tarea no se considera completa por el solo hecho de generar código. Debe cumplir sus criterios de aceptación y superar las pruebas correspondientes.

**Verificación:** ejecutar las pruebas disponibles y, cuando corresponda, las comprobaciones de lint y compilación. Registrar los errores encontrados y corregirlos antes de dar la tarea por terminada.

### 7. Utilizar la inteligencia artificial de forma responsable

La IA puede proponer, generar y revisar código, pero sus resultados deben ser examinados por el estudiante. No se deben aceptar como verdaderas sus explicaciones, resultados de pruebas o afirmaciones de seguridad sin evidencia verificable.

**Verificación:** revisar los cambios antes de incorporarlos, ejecutar las pruebas en el entorno real y registrar en `docs/PROMPTS.md` los prompts relevantes, los errores reales de la IA y las correcciones humanas. No inventar evidencias ni declarar ejecutadas pruebas que no se realizaron.

## Regla de cumplimiento

Si una instrucción contradice estos principios o los documentos del proyecto, el agente debe detenerse, explicar la contradicción y solicitar una decisión antes de realizar cambios que afecten el alcance, la arquitectura, la seguridad o los datos.

El objetivo es construir una aplicación funcional, comprobable, segura y documentada, manteniendo al estudiante como responsable de las decisiones y de la validación final.