# 08-TAREAS — Plan de trabajo y cierre de turnoLibre

> Objetivo: finalizar una versión funcional y documentada de Turnolibre para la entrega del TFI. Marcar las tareas únicamente cuando exista evidencia de su realización.

## Etapa 0 — Planificación e identidad

- [x] Definir la idea y el nombre del proyecto.
- [x] Diseñar el logo y la paleta de colores.
- [x] Redactar la identidad de marca y la documentación inicial.
- [x] Crear `AGENTS.md`.
- [x] Definir los requerimientos funcionales y no funcionales.
- [x] Crear `memory.md`.

## Etapa 1 — Documentación y uso de IA

- [x] Crear `docs/PROMPTS.md`.
- [x] Crear `docs/MATRIZ-IA.md`.
- [x] Crear procedimientos reutilizables para especificar, clarificar y verificar tareas.
- [x] Corregir la codificación de `PROMPTS.md` y `08-TAREAS.md` a UTF-8.
- [x] Crear el README del proyecto.
- [ ] Actualizar la matriz de IA con las actividades reales de implementación y pruebas.
- [ ] Completar el registro de prompts y revisiones de código.
- [ ] Revisar los documentos principales en Visual Studio Code.
- [ ] Preparar la documentación para la Bitácora Digital.

## Etapa 2 — Configuración y entorno

- [x] Crear el proyecto con Next.js y TypeScript.
- [x] Configurar Tailwind CSS.
- [x] Incorporar los recursos gráficos de la marca.
- [x] Configurar `.gitignore`.
- [x] Verificar la exclusión de archivos sensibles y dependencias.
- [x] Configurar la conexión con Turso.
- [x] Integrar la aplicación en la carpeta principal del repositorio.
- [x] Actualizar `AGENTS.md`.
- [x] Documentar la instalación y ejecución en `README.md`.
- [ ] Crear `.env.example` sin credenciales reales.
- [ ] Revisar el estado final del repositorio.
- [ ] Verificar la existencia y el estado del repositorio remoto en GitHub.

## Etapa 3 — Base de datos

- [x] Crear y conectar la base de datos Turso.
- [x] Implementar la conexión mediante LibSQL.
- [x] Crear e inicializar la tabla `reservas`.
- [x] Incorporar los campos necesarios para registrar los turnos.
- [x] Implementar códigos de reserva únicos.
- [x] Incorporar controles para evitar horarios activos duplicados.
- [x] Implementar consultas de disponibilidad.
- [ ] Completar la revisión de integridad de los datos.

## Etapa 4 — Funcionalidades principales

- [x] Mostrar los salones disponibles.
- [x] Mostrar los servicios y profesionales.
- [x] Permitir seleccionar servicio, profesional, fecha y horario.
- [x] Consultar horarios ocupados.
- [x] Registrar una reserva.
- [x] Generar un código de confirmación.
- [x] Mostrar el comprobante de reserva.
- [x] Cancelar una reserva mediante código y dato de contacto.
- [x] Liberar el horario después de una cancelación.
- [ ] Resolver la impresión del comprobante.
- [ ] Verificar el comportamiento de la disponibilidad en distintos escenarios.

## Etapa 5 — Pruebas y seguridad

- [x] Ejecutar la aplicación localmente.
- [x] Comprobar la compilación con `npm.cmd run build`.
- [x] Probar la creación de reservas.
- [x] Probar la cancelación desde la interfaz.
- [x] Comprobar la liberación de horarios cancelados.
- [ ] Repetir las pruebas de disponibilidad.
- [ ] Comprobar que no se puedan duplicar reservas simultáneas.
- [ ] Revisar las validaciones de las API.
- [ ] Revisar la protección de las credenciales.
- [ ] Probar la aplicación en computadora y celular.

## Etapa 6 — Ajuste del alcance original

Las siguientes funciones no forman parte de la versión que se entregará. Se dejan documentadas como decisiones de alcance y posibles mejoras futuras.

- [ ] Incorporar cuentas de clientes y propietarios.
- [ ] Incorporar panel de administración de salones.
- [ ] Permitir reprogramar turnos.
- [ ] Incorporar administración de servicios y profesionales.
- [ ] Incorporar agenda diaria y semanal.
- [ ] Incorporar recordatorios automáticos.
- [ ] Incorporar bloqueo de días y horarios.
- [ ] Incorporar reseñas y estadísticas.

**Decisión de alcance:** los clientes pueden reservar y cancelar sin crear una cuenta. La cancelación se realiza mediante el código de reserva y el dato de contacto. La autenticación y las funciones administrativas quedan fuera de esta versión.

## Etapa 7 — Entrega

- [ ] Revisar el README y la documentación técnica.
- [ ] Completar `MATRIZ-IA.md` y `PROMPTS.md`.
- [ ] Reunir capturas y evidencias de funcionamiento.
- [ ] Comprobar que no haya credenciales en los archivos versionados.
- [ ] Revisar y confirmar la versión definitiva del repositorio.
- [ ] Publicar la aplicación en Vercel, si está dentro de los requisitos de entrega.
- [ ] Verificar el funcionamiento de la versión publicada.
- [ ] Preparar la presentación y la defensa del TFI.

---

## Alcance de la versión final

Turnolibre permite consultar salones, servicios, profesionales y horarios disponibles; realizar reservas y cancelarlas mediante un código de confirmación y un dato de contacto.

La versión se desarrolla con Next.js, React, TypeScript, Tailwind CSS y Turso. No incluye cuentas de usuario ni panel de administración.

Las funciones pendientes se documentan como mejoras futuras y no se presentan como funcionalidades implementadas.