# Procedimiento verificar-criterios — Revisar criterios de aceptación

## Objetivo

Comprobar que los criterios de aceptación de una funcionalidad de turnoLibre sean claros, completos, comprobables y adecuados para decidir si la tarea está terminada.

Este procedimiento complementa `spec.md` y `verificar.md`. No reemplaza las pruebas reales ni la revisión del responsable del proyecto.

## Cuándo utilizarlo

- Al revisar una especificación antes de aprobarla.
- Antes de comenzar la implementación de una funcionalidad.
- Al revisar una modificación de los requisitos.
- Durante la verificación final de una tarea.

## Instrucciones para la IA

1. Consultá `AGENTS.md`, `CONSTITUCION.md`, la especificación de la funcionalidad y los documentos relacionados.
2. Enumerá todos los criterios de aceptación tal como aparecen en la especificación.
3. Revisá cada criterio para comprobar que sea claro, específico, observable y verificable.
4. Identificá criterios ambiguos, repetidos, contradictorios o imposibles de comprobar con la información disponible.
5. Considerá, cuando corresponda, los casos normales, datos inválidos, límites, permisos, errores, accesibilidad, seguridad y solicitudes simultáneas.
6. No agregues requisitos nuevos silenciosamente. Si detectás una omisión importante, proponé el criterio y pedí confirmación.
7. Asociá cada criterio con una prueba o comprobación concreta.
8. Diferenciá el diseño de una prueba de su ejecución real y de su resultado.
9. No declares aprobado un criterio sin evidencia suficiente.
10. Si hay dudas que puedan cambiar el alcance o el comportamiento esperado, utilizá el procedimiento `/clarificar`.

## Formato de respuesta esperado

### 1. Funcionalidad revisada
Indicá el nombre de la funcionalidad y la especificación examinada.

### 2. Matriz de criterios

Para cada criterio, registrá:

| Campo | Descripción |
|---|---|
| ID | Identificador único del criterio. |
| Criterio | Condición que debe cumplir la funcionalidad. |
| Verificabilidad | Claro, necesita ajustes o no verificable. |
| Prueba propuesta | Acción y resultado esperado. |
| Evidencia | Resultado real, archivo, captura o salida de prueba, si existe. |
| Estado | Pendiente, aprobado, fallido o no verificable. |

### 3. Casos faltantes
Enumerá los escenarios importantes que no estén cubiertos y explicá por qué deberían considerarse.

### 4. Dudas y contradicciones
Indicá las preguntas que deben resolverse antes de aprobar la especificación.

### 5. Resultado de la revisión
Elegí uno de estos estados:
- Apto para revisión humana.
- Requiere ajustes.
- Bloqueado por dudas o contradicciones.

Explicá brevemente la decisión.

## Condición para finalizar

Los criterios deben ser comprensibles, comprobables y coherentes con los requerimientos del proyecto. Cada criterio obligatorio debe tener una forma de verificación definida.

La aprobación final corresponde al responsable del proyecto. Las pruebas propuestas no deben presentarse como pruebas ejecutadas.
