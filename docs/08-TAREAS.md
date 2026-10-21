# 08-TAREAS — ¿En qué orden lo hacemos?

> Tildar cada casilla (`- [x]`) al terminar la tarea. Trabajar una etapa por vez.

## Etapa 0 — Especificación

- [x] Definir la idea y el nombre del emprendimiento
- [x] Diseñar el logo y la paleta de colores
- [x] Redactar `IDENTIDAD-MARCA.md` y los archivos de `docs/`
- [x] Crear `AGENTS.md`
- [ ] Revisar los archivos con la vista previa de VS Code (Ctrl + Shift + V)
- [ ] Subir la carpeta a la Bitácora Digital

## Etapa 1 — Configuración del proyecto

- [ ] Crear el repositorio en GitHub
- [ ] Crear el proyecto Next.js con TypeScript y Tailwind CSS
- [ ] Configurar variables de color y tipografías de la marca
- [ ] Crear `.env.example` y agregar `.env` al `.gitignore`
- [ ] Conectar el repositorio con Vercel

## Etapa 2 — Base de datos

- [ ] Crear la base PostgreSQL
- [ ] Definir el esquema en `prisma/schema.prisma`
- [ ] Ejecutar la primera migración
- [ ] Crear datos de prueba ficticios (`seed.ts`)

## Etapa 3 — Cuentas de usuario

- [ ] Pantalla de registro (RF01)
- [ ] Pantalla de ingreso (RF01)
- [ ] Protección de rutas del panel según el rol

## Etapa 4 — Reserva de turnos (clientes)

- [ ] Listado y búsqueda de peluquerías (RF02)
- [ ] Perfil de peluquería (RF03)
- [ ] Cálculo de horarios disponibles (RF04, RF06)
- [ ] Formulario de reserva paso a paso (RF04, RF05)
- [ ] Pantalla «Mis turnos» con reprogramar y cancelar (RF07)

## Etapa 5 — Panel de la peluquería

- [ ] Alta y edición del perfil del local (RF08)
- [ ] Administración de servicios (RF09)
- [ ] Administración de profesionales y horarios (RF10)
- [ ] Agenda diaria y semanal (RF11)
- [ ] Cambio de estado de los turnos (RF12)

## Etapa 6 — Mejoras

- [ ] Recordatorio por correo 24 horas antes (RF13)
- [ ] Bloqueo de días y horarios (RF14)
- [ ] Reseñas de clientes (RF15)

## Etapa 7 — Calidad y publicación

- [ ] Aplicar el SEO de `09-SEO.md`
- [ ] Revisar la seguridad según `10-SEGURIDAD.md`
- [ ] Probar la aplicación en celular y en computadora
- [ ] Publicar la versión final en Vercel
