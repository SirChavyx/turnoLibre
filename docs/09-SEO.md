# 09-SEO — ¿Cómo nos encuentran en Google?

## Título y descripción por página

| Página | Título (máx. 60 caracteres) | Descripción (máx. 155 caracteres) |
|---|---|---|
| Inicio | turnoLibre | Reservá turnos en peluquerías y barberías online. Elegí servicio, profesional y horario en pocos pasos. |
| Listado de peluquerías | Peluquerías y barberías \| turnoLibre | Encontrá peluquerías y barberías, mirá sus servicios y sacá tu turno online sin esperar respuestas. |
| Perfil de peluquería | [Nombre del local] \| turnoLibre | Mirá los servicios, profesionales y horarios de [Nombre del local] y reservá tu turno online. |
| Registro | Crear cuenta \| turnoLibre | Creá tu cuenta gratis en turnoLibre y reservá tus turnos de peluquería desde el celular. |
| Ingreso | Ingresar \| turnoLibre | Ingresá a tu cuenta para ver, reprogramar o cancelar tus turnos. |
| Reserva, Mis turnos y Panel | (título propio) | Páginas privadas: no se indexan (`noindex`). |

## Palabras clave

| Tipo | Palabras |
|---|---|
| Principales | turnos peluquería, reservar turno peluquería, turnos online barbería |
| Secundarias | agenda de peluquería, sacar turno corte de pelo, app para peluquerías |
| Cola larga | cómo reservar turno en una peluquería desde el celular, sistema de turnos para barbería |

## Texto alternativo de imágenes

| Imagen | Texto alternativo (`alt`) |
|---|---|
| Logo en la barra superior | Logo de turnoLibre: reloj con tijeras cruzadas y calendario |
| Ícono de tijeras | Tijeras de peluquería |
| Ícono de calendario | Calendario de turnos |
| Foto del local (cuando exista) | Interior de la peluquería [Nombre del local] |

## Configuración técnica

```tsx
// src/app/layout.tsx
export const metadata = {
  title: "turnoLibre",
  description:
    "Reservá turnos en peluquerías y barberías online. Elegí servicio, profesional y horario en pocos pasos.",
  openGraph: { title: "turnoLibre", locale: "es_AR", type: "website" },
};
```

## Buenas prácticas

- [ ] Un solo `<h1>` por página, con la palabra clave principal.
- [ ] URLs cortas y legibles en español (`/peluquerias`).
- [ ] Archivo `sitemap.xml` y `robots.txt` que excluyan las páginas privadas.
- [ ] Imágenes optimizadas con el componente `Image` de Next.js.
- [ ] Etiqueta `lang="es"` en el documento HTML.
