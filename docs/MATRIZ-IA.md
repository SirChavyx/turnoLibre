# Matriz de uso de inteligencia artificial — turnoLibre

## 1. Propósito

Identificar cómo se utiliza la inteligencia artificial durante el TFI, qué decisiones quedan a cargo del responsable del proyecto y qué evidencias permiten comprobar el trabajo realizado.

La matriz se actualizará durante el desarrollo. No se considerará una propuesta de la IA como una decisión aprobada ni una prueba sugerida como una prueba ejecutada.

## 2. Matriz de actividades

| Actividad | Uso de IA | Intervención y revisión humana | Evidencia disponible | Estado |
|---|---|---|---|---|
| Preparación de la documentación inicial y del repositorio | Asistencia para organizar documentos y preparar el control de versiones | Se ejecutaron comandos y se revisó el resultado informado por Git | Commit local `2c37269`; registro en `docs/PROMPTS.md` | Realizado; revisión posterior pendiente |
| Creación de la memoria de trabajo | Asistencia para resumir el contexto, las reglas y el alcance del proyecto | Se comprobó el contenido de `memory.md` con PowerShell | Archivo `memory.md`; commit local `5a591a2`; registro en `docs/PROMPTS.md` | Realizado |
| Creación de procedimientos reutilizables | Asistencia para redactar instrucciones de especificación, aclaración y verificación | Se ejecutaron comandos de creación y se inspeccionaron las salidas de los archivos | `procedimientos/spec.md`, `procedimientos/clarificar.md`, `procedimientos/verificar.md` y `procedimientos/verificar-criterios.md` | Archivos creados; revisión integral pendiente |
| Organización de la lista de tareas | Asistencia para reorganizar las secciones de `docs/08-TAREAS.md` | Se ejecutaron comandos, se detectaron reemplazos que no coincidían y se revisó la salida posterior | `docs/08-TAREAS.md`; salidas de PowerShell de la sesión | En revisión |
| Implementación de la aplicación | Todavía no iniciada | Se deberán revisar requisitos, código, seguridad y pruebas antes de aceptar cambios | Pendiente | Pendiente |
| Pruebas y publicación | Todavía no realizadas | Se deberán ejecutar y documentar las pruebas reales y verificar la publicación | Pendiente | Pendiente |

## 3. Criterios de evaluación

- La IA puede proponer textos, estructuras, explicaciones y alternativas.
- El responsable del proyecto revisa los resultados y decide qué aceptar, modificar o rechazar.
- Los comandos se consideran ejecutados únicamente cuando existe una salida u otra evidencia que lo respalde.
- Los archivos creados no se consideran automáticamente correctos por el solo hecho de existir.
- Las pruebas, errores, correcciones y resultados se registran tal como ocurrieron.
- No se incorporan credenciales, claves, contraseñas ni datos personales innecesarios.

## 4. Evidencias que faltan incorporar

- Capturas o exportaciones que exija la consigna del TFI.
- Registro más detallado de los prompts utilizados para crear los procedimientos.
- Revisión completa de la documentación en Visual Studio Code.
- Evidencias de implementación, pruebas y publicación cuando esas etapas se realicen.

## 5. Actualización

Actualizar esta matriz cuando se complete una actividad importante. Coordinar los registros con `docs/PROMPTS.md` y conservar las referencias a archivos, comandos y commits disponibles.
