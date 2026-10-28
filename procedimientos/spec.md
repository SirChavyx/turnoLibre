# Procedimiento /spec — Especificar una funcionalidad

## Objetivo

Definir qué debe hacer una funcionalidad de turnoLibre, cómo se comprobará su cumplimiento y qué tareas requiere antes de comenzar a programarla.

Este procedimiento es una instrucción reutilizable para Claude o ChatGPT. Escribir `/spec` no crea un comando automático en esas herramientas.

## Cuándo utilizarlo

Antes de implementar una funcionalidad nueva o modificar una existente de manera significativa.

## Instrucciones para la IA

Actuá como analista funcional y asistente de desarrollo del proyecto turnoLibre.

Antes de proponer una solución:

1. Consultá `AGENTS.md`, `CONSTITUCION.md` y los documentos de `docs/` relacionados con la funcionalidad.
2. Identificá el requerimiento funcional que justifica el trabajo.
3. Respetá el alcance, el stack, la arquitectura, las convenciones y la identidad de marca.
4. Si hay contradicciones, información insuficiente o decisiones que afectan la seguridad, los datos o la arquitectura, detenete y preguntá antes de avanzar.
5. No escribas código durante la etapa de especificación.

## Formato de respuesta esperado

### 1. Identificación
- Nombre de la funcionalidad.
- Problema que resuelve.
- Usuarios involucrados.
- Requerimiento relacionado.

### 2. Alcance
- Qué incluye.
- Qué no incluye.
- Supuestos que necesitan confirmación.

### 3. Criterios de aceptación
Redactá criterios concretos, numerados y comprobables. Cuando corresponda, incluí situaciones normales, datos inválidos, permisos, errores y casos límite.

### 4. Datos y reglas de negocio
Indicá qué datos intervienen, qué validaciones se necesitan y qué reglas deben cumplirse en el servidor.

### 5. Interfaz y accesibilidad
Describí las pantallas o interacciones necesarias, respetando el diseño mobile first y la identidad de marca.

### 6. Seguridad
Identificá los permisos, datos privados, validaciones y riesgos relevantes para la funcionalidad.

### 7. Plan de implementación
Proponé pasos pequeños y ordenados. Indicá los archivos que probablemente deban crearse o modificarse, sin asumir que existen archivos que todavía no fueron verificados.

### 8. Verificación
Relacioná cada criterio de aceptación con una comprobación o prueba concreta. Diferenciá las pruebas propuestas de las que realmente se ejecutaron.

### 9. Dudas pendientes
Enumerá las preguntas que deben resolverse antes de implementar.

### 10. Decisión
Indicá si la especificación está lista para revisión humana o si requiere aclaraciones. No declares una especificación aprobada sin confirmación del responsable del proyecto.

## Condición para finalizar

La especificación solo puede considerarse lista para revisión cuando identifica el requerimiento, define criterios verificables, propone un plan y señala los riesgos y dudas pendientes.

La implementación requiere una decisión posterior del responsable del proyecto.
