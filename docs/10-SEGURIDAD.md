# 10 - Seguridad y protección de datos

## 1. Objetivo

La seguridad de turnoLibre busca proteger la información de las reservas, evitar operaciones incorrectas y reducir los riesgos asociados al uso de la aplicación.

Las medidas implementadas corresponden al alcance actual del proyecto, que permite consultar disponibilidad, registrar reservas y cancelar turnos.

## 2. Datos almacenados

La aplicación utiliza una base de datos Turso, compatible con SQLite, para guardar la información de las reservas.

| Dato | Tratamiento |
|---|---|
| Nombre del cliente | Se almacena para identificar la reserva. |
| Teléfono de contacto | Se utiliza para identificar y cancelar una reserva. |
| Salón | Identifica el establecimiento seleccionado. |
| Servicio | Identifica el servicio solicitado. |
| Profesional | Identifica a la persona que atenderá el turno. |
| Fecha y hora | Permiten organizar la disponibilidad. |
| Código de reserva | Permite identificar una reserva para su cancelación. |
| Estado | Indica si la reserva está confirmada o cancelada. |

No se almacenan contraseñas ni datos de tarjetas bancarias, ya que el proyecto no cuenta con registro de usuarios ni procesamiento de pagos.

## 3. Variables de entorno

Las credenciales de conexión con Turso se guardan en variables de entorno.

Las variables utilizadas son:

```env
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
```

Se establecen los siguientes criterios:

- Los valores reales se guardan en `.env.local`.
- El archivo `.env.local` debe permanecer fuera del repositorio.
- El archivo `.env.example` contiene los nombres de las variables, sin credenciales reales.
- Las claves privadas no deben incluirse en el código fuente ni compartirse públicamente.
- Si una credencial se expone accidentalmente, debe reemplazarse.

## 4. Validaciones de la API

Las validaciones se realizan en el servidor para evitar depender exclusivamente de los controles del formulario.

| Dato u operación | Validación implementada |
|---|---|
| Campos de reserva | Se comprueba que sean obligatorios y contengan texto. |
| Longitud de datos | Se establecen límites para los campos recibidos. |
| Nombre del cliente | Se exige una longitud mínima de dos caracteres. |
| Fecha | Se comprueba el formato y que sea una fecha válida. |
| Fecha de reserva | Se impiden las fechas anteriores al día actual en Argentina. |
| Horario | Se acepta únicamente un horario de la lista permitida. |
| Disponibilidad | Se comprueba que el horario no esté ocupado. |
| Código de reserva | Se genera un código aleatorio mediante funciones criptográficas. |
| Cancelación | Se exige el código y el teléfono de contacto. |
| Anticipación | Se impide cancelar cuando faltan menos de 60 minutos para el turno. |

## 5. Protección de la base de datos

Las consultas utilizan parámetros para enviar los valores recibidos desde la aplicación.

Esto evita incorporar directamente los datos del usuario dentro de las instrucciones SQL y ayuda a prevenir ataques de inyección SQL.

Además, la base de datos cuenta con restricciones e índices únicos para impedir que se registren dos reservas activas en el mismo horario para un mismo profesional.

Las reservas canceladas se conservan como historial y dejan de ocupar el horario.

## 6. Manejo de errores

La API utiliza respuestas HTTP para informar el resultado de las operaciones.

- `200`: operación realizada correctamente.
- `201`: reserva creada.
- `400`: datos inválidos o incompletos.
- `404`: reserva no encontrada.
- `409`: conflicto, como un horario ocupado o una reserva ya cancelada.
- `500`: error interno del servidor.

Los mensajes enviados al navegador son generales. Los detalles técnicos se registran del lado del servidor para facilitar el diagnóstico.

## 7. Protección de la información

Se deben respetar los siguientes criterios:

- No mostrar credenciales ni tokens en la interfaz.
- No incluir datos de conexión en archivos públicos.
- No compartir los teléfonos o nombres de los clientes.
- No publicar archivos de configuración que contengan secretos.
- Mantener `.env.local` excluido del repositorio mediante `.gitignore`.
- Evitar mostrar detalles internos de la base de datos en los mensajes de error.

## 8. Limitaciones actuales

La versión actual es un prototipo académico y todavía presenta aspectos de seguridad que pueden mejorarse.

| Aspecto | Estado |
|---|---|
| Autenticación de usuarios | No implementada. |
| Registro e inicio de sesión | No implementados. |
| Control de acceso por roles | No implementado. |
| Límite de intentos de consulta y cancelación | Pendiente. |
| Verificación adicional de identidad del cliente | No implementada. |
| Validación de pertenencia entre salón, servicio y profesional | Pendiente de implementar. |
| Protección mediante HTTPS | Depende de la configuración del servidor donde se publique. |

## 9. Mejoras futuras

Se consideran posibles mejoras:

- Incorporar límites de solicitudes para prevenir abusos.
- Reforzar la validación de los datos recibidos.
- Verificar que los servicios y profesionales correspondan al salón seleccionado.
- Revisar periódicamente las dependencias y sus vulnerabilidades.
- Configurar correctamente HTTPS en el entorno de publicación.
- Incorporar autenticación y permisos si se agregan cuentas y paneles de administración.

## 10. Alcance de seguridad

Las medidas actuales protegen principalmente las operaciones de consulta, creación y cancelación de reservas.

La aplicación no dispone todavía de un sistema completo de usuarios, autenticación ni administración de comercios. Estas funciones quedan fuera del alcance de la versión desarrollada.