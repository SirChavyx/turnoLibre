# 02-REQUERIMIENTOS — ¿Qué tiene que hacer?

## Requerimientos funcionales

**Prioridad:** Alta = indispensable para la primera versión · Media = importante, puede
esperar · Baja = mejora futura.

| ID | Requerimiento | Actor | Prioridad |
|---|---|---|---|
| RF01 | Registrarse e iniciar sesión con correo y contraseña | Cliente / Dueño | Alta |
| RF02 | Ver el listado de peluquerías y buscar por nombre | Cliente | Alta |
| RF03 | Ver el perfil de una peluquería con servicios, profesionales y precios | Cliente | Alta |
| RF04 | Elegir servicio, profesional, fecha y horario disponible | Cliente | Alta |
| RF05 | Confirmar la reserva y recibir un comprobante en pantalla | Cliente | Alta |
| RF06 | Impedir reservar un horario ya ocupado por el mismo profesional | Sistema | Alta |
| RF07 | Ver, reprogramar y cancelar mis turnos | Cliente | Alta |
| RF08 | Crear y editar el perfil de la peluquería | Dueño | Alta |
| RF09 | Administrar servicios (nombre, duración y precio) | Dueño | Alta |
| RF10 | Administrar profesionales y sus horarios de atención | Dueño | Alta |
| RF11 | Ver la agenda diaria y semanal de turnos | Dueño / Profesional | Alta |
| RF12 | Confirmar, cancelar o marcar un turno como atendido o ausente | Dueño | Media |
| RF13 | Enviar un recordatorio por correo 24 horas antes del turno | Sistema | Media |
| RF14 | Bloquear horarios o días (feriados, vacaciones) | Dueño | Media |
| RF15 | Dejar una reseña luego de un turno atendido | Cliente | Baja |
| RF16 | Mostrar estadísticas simples (turnos por semana, servicios más pedidos) | Dueño | Baja |

## Requerimientos no funcionales

- **RNF01 — Rendimiento:** las páginas principales deben cargar en menos de 3 segundos con conexión móvil estándar.
- **RNF02 — Responsive:** la interfaz debe funcionar correctamente desde 360 px de ancho hasta escritorio.
- **RNF03 — Usabilidad:** una reserva completa no debe requerir más de 4 pasos.
- **RNF04 — Seguridad:** contraseñas cifradas, comunicación por HTTPS y validación de datos en el servidor (ver `10-SEGURIDAD.md`).
- **RNF05 — Disponibilidad:** la aplicación debe estar publicada y accesible las 24 horas.
- **RNF06 — Consistencia:** nunca debe existir más de un turno activo para el mismo profesional en el mismo horario.
- **RNF07 — Accesibilidad:** contraste suficiente, textos alternativos en imágenes y formularios con etiquetas.
- **RNF08 — Mantenibilidad:** código organizado según `04-ARQUITECTURA.md` y `07-CONVENCIONES.md`.
- **RNF09 — Zona horaria:** todos los horarios se muestran en hora de Argentina (UTC-3).
