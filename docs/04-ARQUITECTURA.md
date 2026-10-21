# 04-ARQUITECTURA — ¿Cómo se organiza el código?

## Árbol de carpetas

```text
turnolibre/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   ├── logo-turnolibre.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── peluquerias/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── reservar/[peluqueriaId]/page.tsx
│   │   ├── mis-turnos/page.tsx
│   │   ├── ingresar/page.tsx
│   │   ├── registro/page.tsx
│   │   ├── panel/
│   │   │   ├── page.tsx
│   │   │   ├── agenda/page.tsx
│   │   │   ├── servicios/page.tsx
│   │   │   └── profesionales/page.tsx
│   │   └── api/
│   │       ├── auth/[...nextauth]/route.ts
│   │       ├── turnos/route.ts
│   │       └── horarios-disponibles/route.ts
│   ├── components/
│   │   ├── ui/
│   │   ├── TarjetaPeluqueria.tsx
│   │   ├── SelectorHorario.tsx
│   │   └── FormularioReserva.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   ├── validaciones.ts
│   │   └── horarios.ts
│   └── styles/
│       └── globals.css
├── docs/
├── .env.example
├── AGENTS.md
└── package.json
```

## Función de cada parte

| Carpeta o archivo | Función |
|---|---|
| `prisma/` | Esquema de la base de datos y datos de prueba |
| `public/` | Archivos estáticos: logo e íconos |
| `src/app/` | Páginas y rutas de la aplicación (App Router de Next.js) |
| `src/app/panel/` | Pantallas privadas para dueños y profesionales |
| `src/app/api/` | Endpoints del servidor: autenticación, turnos y horarios libres |
| `src/components/` | Componentes de interfaz reutilizables |
| `src/components/ui/` | Botones, campos, tarjetas y otros elementos base con la identidad de marca |
| `src/lib/` | Lógica compartida: conexión a la base, sesión, validaciones y cálculo de horarios |
| `src/styles/` | Estilos globales y variables de color |
| `.env.example` | Lista de variables de entorno sin valores reales |

## Flujo de una reserva

```text
Cliente → SelectorHorario → POST /api/turnos → validar (Zod) → verificar disponibilidad → guardar en PostgreSQL → correo de confirmación
```

## Reglas de arquitectura

- La lógica de negocio (cálculo de horarios libres) vive en `src/lib/`, no dentro de los componentes.
- Los componentes no acceden a la base de datos directamente: usan la API o funciones del servidor.
- Las rutas de `panel/` solo son accesibles para usuarios con rol de dueño o profesional.
