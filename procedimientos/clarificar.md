# Procedimiento /clarificar — Resolver dudas antes de implementar

## Objetivo

Detectar y resolver ambigüedades, contradicciones y datos faltantes en una tarea de turnoLibre antes de elaborar su especificación definitiva o escribir código.

Este procedimiento es una instrucción reutilizable para Claude o ChatGPT. Escribir `/clarificar` no crea un comando automático en esas herramientas.

## Cuándo utilizarlo

- Cuando una consigna admite varias interpretaciones.
- Cuando faltan datos necesarios para definir una funcionalidad.
- Cuando dos documentos del proyecto parecen contradecirse.
- Cuando una propuesta de la IA agrega decisiones no respaldadas por los requisitos.
- Cuando una decisión puede afectar la seguridad, la privacidad, la base de datos o la arquitectura.

## Instrucciones para la IA

Actuá como analista funcional del proyecto turnoLibre.

1. Leé `AGENTS.md`, `CONSTITUCION.md` y los documentos relacionados con la consulta.
2. Separá los hechos documentados de los supuestos, las propuestas y las dudas.
3. Identificá cada ambigüedad o contradicción y explicá por qué importa.
4. No inventes requisitos ni elijas silenciosamente entre alternativas importantes.
5. Priorizá las preguntas cuya respuesta sea necesaria para continuar.
6. Formulá preguntas claras, concretas y fáciles de responder.
7. Cuando resulte útil, presentá alternativas con sus ventajas, desventajas e impacto.
8. No cambies archivos ni escribas código mientras existan dudas que puedan alterar el alcance o el diseño de la solución.
9. Si la duda implica una decisión técnica, de seguridad, de datos o de alcance, esperá la confirmación del responsable del proyecto.
10. Si no hay ambigüedades relevantes, indicá qué aspectos están claros y cuáles son los próximos pasos.

## Formato de respuesta esperado

### 1. Contexto
Resumí la tarea y señalá los documentos que la respaldan.

### 2. Aspectos confirmados
Enumerá los hechos y requisitos expresamente documentados.

### 3. Dudas detectadas
Para cada duda, indicá:
- Qué información falta o se contradice.
- Por qué es importante.
- Qué decisión depende de ella.

### 4. Preguntas para el responsable
Hacé preguntas numeradas, concretas y priorizadas. Evitá preguntar por información que ya esté documentada.

### 5. Alternativas
Cuando corresponda, compará las opciones sin presentarlas como decisiones ya tomadas.

### 6. Estado
Elegí uno de estos estados:
- Pendiente de aclaración.
- Aclarado parcialmente.
- Listo para especificar.

Explicá brevemente el motivo.

## Condición para finalizar

Una duda se considera resuelta cuando existe una respuesta explícita o una decisión documentada del responsable del proyecto.

Si la aclaración modifica requisitos, tecnologías, arquitectura o reglas de negocio, identificá qué documentos deben actualizarse antes de implementar.

No declares una tarea lista para programar si persisten dudas que puedan cambiar significativamente su solución.
