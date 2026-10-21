# 03-TECNOLOGIAS — ¿Con qué lo construimos?

## Stack elegido

| Capa | Tecnología | Motivo |
|---|---|---|
| Frontend y servidor | **React con Next.js** (TypeScript) | Permite páginas rápidas, rutas simples y API en un mismo proyecto; buen posicionamiento en buscadores |
| Estilos | **Tailwind CSS** | Aplica la paleta de marca con variables y facilita un diseño mobile first |
| Base de datos | **PostgreSQL** | Base relacional: ideal para turnos, servicios y profesionales relacionados entre sí, con restricciones que evitan duplicados |
| Acceso a datos | **Prisma ORM** | Define el esquema en un archivo, genera tipos y evita escribir SQL a mano |
| Autenticación | **Auth.js** (credenciales) | Maneja sesiones y contraseñas cifradas sin programarlo desde cero |
| Validaciones | **Zod** | Valida formularios y datos del servidor con el mismo esquema |
| Correos | **Resend** (plan gratuito) | Envío simple de confirmaciones y recordatorios |
| Repositorio | **GitHub** | Control de versiones e historial de commits como evidencia del proceso |
| Publicación | **Vercel** | Despliegue automático desde GitHub, compatible con Next.js, con plan gratuito |
| IA | **Claude** (asistente de código) | Genera código a partir de estas especificaciones y ayuda a revisarlo |

## Reglas sobre el stack

- No agregar tecnologías nuevas sin justificarlas en este archivo.
- Preferir librerías mantenidas y con documentación en español o inglés claro.
- Toda dependencia nueva se instala con `npm install` y queda registrada en `package.json`.

## Instalación inicial

```bash
npx create-next-app@latest turnolibre --typescript --tailwind --app
cd turnolibre
npm install prisma @prisma/client zod next-auth bcryptjs resend
npx prisma init
```

## Versiones de referencia

| Herramienta | Versión mínima |
|---|---|
| Node.js | 20 LTS |
| Next.js | 14 o superior |
| PostgreSQL | 15 o superior |
