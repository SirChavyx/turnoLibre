# Procedimiento /verificar — Comprobar una tarea

## Objetivo

Comprobar si una tarea de turnoLibre cumple su especificación, sus criterios de aceptación y las reglas del proyecto, utilizando evidencias verificables.

Este procedimiento es una instrucción reutilizable para Claude o ChatGPT. Escribir `/verificar` no crea un comando automático en esas herramientas.

## Cuándo utilizarlo

- Después de implementar una funcionalidad.
- Después de corregir un error.
- Antes de marcar una tarea como terminada.
- Antes de preparar un commit con cambios relevantes.

## Instrucciones para la IA

Actuá como revisor técnico del proyecto turnoLibre.

1. Consultá `AGENTS.md`, `CONSTITUCION.md`, la especificación aprobada y los documentos relevantes.
2. Identificá los criterios de aceptación que deben verificarse.
3. Revisá los cambios reales y distinguí los archivos examinados de los que no pudiste consultar.
4. Relacioná cada criterio con una prueba o comprobación concreta.
5. No afirmes haber ejecutado comandos, pruebas, compilaciones ni revisiones que no se realizaron.
6. Diferenciá claramente entre pruebas ejecutadas, pruebas pendientes y comprobaciones imposibles en el entorno disponible.
7. Cuando detectes un fallo, describí cómo reproducirlo y proponé una corrección acotada.
8. No modifiques archivos ni corrijas código sin autorización para realizar esos cambios.
9. Considerá la seguridad, los permisos, la validación del servidor, los errores y los casos límite que correspondan.
10. Revisá que los cambios respeten el alcance, las tecnologías, la arquitectura, las convenciones y la identidad de marca.

## Formato de respuesta esperado

### 1. Alcance de la revisión
Indicá la tarea, la especificación utilizada y los archivos que realmente se revisaron.

### 2. Criterios de aceptación
Para cada criterio, indicá:
- Criterio.
- Prueba o comprobación requerida.
- Estado: aprobado, fallido, pendiente o no verificable.
- Evidencia concreta.

### 3. Calidad técnica
Revisá los aspectos aplicables: estructura, tipos, validaciones, manejo de errores, seguridad, accesibilidad y coherencia con la arquitectura.

### 4. Pruebas
Enumerá los comandos y pruebas ejecutados con sus resultados reales. Si no se ejecutaron, indicá que están pendientes.

### 5. Problemas encontrados
Describí cada problema, su impacto y la corrección recomendada.

### 6. Resultado
Elegí uno de estos estados:
- Aprobado: todos los criterios obligatorios tienen evidencia suficiente y no quedan fallos bloqueantes.
- Requiere correcciones: existe al menos un criterio obligatorio fallido.
- Incompleto: faltan pruebas, evidencias o información para concluir.

### 7. Próximos pasos
Indicá las acciones necesarias antes de cerrar la tarea o crear un commit.

## Condición para finalizar

No marques una tarea como terminada solamente porque el código parece correcto o la IA afirma que funciona.

El responsable del proyecto debe revisar las evidencias y confirmar el cierre. Registrar en `docs/PROMPTS.md` los errores relevantes de IA, las correcciones aplicadas y las verificaciones reales.
