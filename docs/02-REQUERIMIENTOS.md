# 02 - Requerimientos del proyecto

## 1. Criterios de clasificación

Los requerimientos se clasifican según su estado en la versión desarrollada:

- **Implementado:** la función está incorporada y se ha comprobado su funcionamiento.
- **Parcial:** existe una parte de la función, pero no se cumple todo lo solicitado.
- **Pendiente:** todavía no se implementó o no se verificó.
- **Fuera del alcance:** se decidió no incorporar esa función en esta versión.

## 2. Requerimientos funcionales

| ID | Requerimiento | Actor | Prioridad | Estado |
|---|---|---|---|---|
| RF01 | Registrarse e iniciar sesión con correo y contraseña. | Cliente / Dueño | Alta | Fuera del alcance |
| RF02 | Visualizar y buscar establecimientos por nombre. | Cliente | Alta | Implementado |
| RF03 | Consultar los servicios, profesionales y precios de cada establecimiento. | Cliente | Alta | Implementado |
| RF04 | Seleccionar un servicio, profesional, fecha y horario disponible. | Cliente | Alta | Implementado |
| RF05 | Confirmar una reserva y obtener un comprobante en pantalla con un código de confirmación. | Cliente | Alta | Implementado |
| RF06 | Impedir reservas duplicadas para un mismo profesional, fecha y horario. | Sistema | Alta | Implementado |
| RF07 | Consultar, reprogramar y cancelar las reservas del cliente. | Cliente | Alta | Parcial |
| RF08 | Crear y editar el perfil de un establecimiento. | Dueño | Alta | Fuera del alcance |
| RF09 | Administrar servicios, duración y precios. | Dueño | Alta | Fuera del alcance |
| RF10 | Administrar profesionales y sus horarios de atención. | Dueño | Alta | Fuera del alcance |
| RF11 | Consultar la agenda diaria y semanal. | Dueño / Profesional | Alta | Fuera del alcance |
| RF12 | Confirmar, cancelar o marcar turnos como atendidos o ausentes. | Dueño | Media | Fuera del alcance |
| RF13 | Enviar recordatorios automáticos por correo electrónico. | Sistema | Media | Fuera del alcance |
| RF14 | Bloquear días y horarios de atención. | Dueño | Media | Fuera del alcance |
| RF15 | Permitir que los clientes dejen reseñas. | Cliente | Baja | Fuera del alcance |
| RF16 | Mostrar estadísticas de reservas y servicios. | Dueño | Baja | Fuera del alcance |

**Aclaración sobre RF07:** la aplicación permite cancelar una reserva mediante el código de confirmación y el teléfono de contacto, siempre que se respeten las condiciones de cancelación. No dispone de cuentas de usuario, historial de turnos ni reprogramación.

## 3. Requerimientos no funcionales

| ID | Requerimiento | Estado |
|---|---|---|
| RNF01 | **Rendimiento:** las páginas principales deben cargar en menos de 3 segundos con una conexión móvil estándar. | Pendiente de verificación |
| RNF02 | **Diseño adaptable:** la interfaz debe funcionar en celulares, tablets y computadoras. | Implementado |
| RNF03 | **Usabilidad:** el proceso de reserva debe ser sencillo y requerir pocos pasos. | Implementado |
| RNF04 | **Seguridad:** validar los datos en el servidor, proteger las credenciales y utilizar HTTPS en la publicación. | Parcial |
| RNF05 | **Disponibilidad:** la aplicación debe estar publicada y accesible de manera permanente. | Pendiente |
| RNF06 | **Consistencia:** impedir que dos reservas activas ocupen el mismo horario para un profesional. | Implementado |
| RNF07 | **Accesibilidad:** utilizar contrastes adecuados, textos alternativos y etiquetas en los formularios. | Pendiente de verificación |
| RNF08 | **Mantenibilidad:** mantener el código organizado y documentado según la arquitectura y las convenciones del proyecto. | Implementado |
| RNF09 | **Zona horaria:** mostrar y gestionar los horarios utilizando la hora de Argentina (UTC-3). | Implementado |

**Aclaraciones sobre los requisitos no funcionales:**

- RNF01 requiere pruebas de rendimiento con distintas condiciones de conexión.
- RNF04 cuenta con validaciones en el servidor, consultas SQL parametrizadas y credenciales almacenadas en variables de entorno. La utilización de HTTPS depende de la publicación de la aplicación.
- RNF05 queda pendiente hasta realizar la publicación y comprobar su disponibilidad.
- RNF06 se implementa mediante controles en la API y un índice único parcial en la base de datos.
- RNF07 requiere una revisión específica de accesibilidad antes de considerarlo completamente cumplido.

## 4. Alcance funcional de la versión desarrollada

La aplicación permite:

1. Visualizar y buscar establecimientos de ejemplo.
2. Consultar servicios, profesionales y precios.
3. Seleccionar fecha y horario disponible.
4. Registrar una reserva en la base de datos.
5. Obtener un código de confirmación y un comprobante.
6. Cancelar una reserva mediante el código y el teléfono de contacto.
7. Liberar el horario cuando se cancela una reserva.

Los establecimientos, servicios y precios utilizados son datos ficticios de demostración.

## 5. Funcionalidades previstas para futuras versiones

Se consideran posibles ampliaciones:

- Registro e inicio de sesión.
- Cuentas para propietarios y profesionales.
- Panel de administración.
- Gestión de servicios, profesionales y horarios.
- Consulta de agenda.
- Reprogramación de reservas.
- Recordatorios automáticos.
- Pagos online.
- Reseñas y estadísticas.

Estas funciones no forman parte de la versión actual y no deben considerarse requisitos cumplidos.