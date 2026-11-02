# 09 - SEO y visibilidad en buscadores

## 1. Objetivo

El objetivo del SEO es facilitar que los buscadores comprendan el contenido de turnoLibre y puedan mostrar la página principal en los resultados de búsqueda.

La aplicación es un prototipo académico de reservas para peluquerías y barberías. Actualmente cuenta con una página principal y no dispone de páginas individuales para cada comercio.

## 2. Título y descripción

La aplicación utiliza los metadatos generales definidos en `src/app/layout.tsx`.

| Elemento | Contenido |
|---|---|
| Título | Turnolibre App |
| Descripción | Sistema de reservas para peluquerías y barberías. Tu turno, sin vueltas. |
| Idioma | Español |
| Código de idioma | `es` |

Estos metadatos describen la finalidad general de la aplicación.

## 3. Palabras clave

Se consideran las siguientes palabras y expresiones relacionadas con la temática del proyecto:

| Tipo | Palabras clave |
|---|---|
| Principales | turnos online, reservas de peluquería, turnos para barbería |
| Secundarias | reservar turno, corte de pelo, servicios de peluquería |
| Frases relacionadas | reservar un turno desde el celular, consultar horarios disponibles |

Las palabras clave sirven como orientación para redactar los textos de la página. No garantizan por sí mismas una mejor posición en los buscadores.

## 4. Imágenes y textos alternativos

Las imágenes deben contar con textos alternativos descriptivos cuando transmitan información relevante.

Se utilizan recursos gráficos propios de la identidad visual de turnoLibre, ubicados en `public/marca/`.

| Recurso | Criterio |
|---|---|
| Logo principal | Identificar la marca turnoLibre. |
| Imágenes del carrusel | Describir el contenido visual de cada imagen. |
| Imágenes decorativas | Utilizar texto alternativo vacío cuando corresponda. |

Los textos alternativos deben describir lo que realmente muestra cada imagen. No deben incluir palabras clave de manera artificial.

## 5. Configuración técnica

Los metadatos generales se encuentran definidos en:

`src/app/layout.tsx`

La configuración actual incluye:

- Título de la aplicación.
- Descripción general.
- Idioma español mediante `lang="es"` en el documento HTML.

Se pueden incorporar posteriormente otros metadatos, como Open Graph, para mejorar la presentación de los enlaces cuando se comparten en redes sociales.

## 6. Buenas prácticas

- Utilizar títulos y descripciones relacionados con el contenido real.
- Mantener una estructura ordenada de encabezados HTML.
- Utilizar textos claros y descriptivos.
- Incorporar textos alternativos adecuados en las imágenes.
- Optimizar el tamaño de los recursos gráficos.
- Mantener el atributo `lang="es"` en el documento HTML.
- Evitar enlaces a páginas que todavía no existen.

## 7. Mejoras futuras

Las siguientes acciones quedan pendientes y no forman parte de las funcionalidades actualmente implementadas:

- Crear un archivo `sitemap.xml`.
- Configurar `robots.txt`.
- Incorporar metadatos Open Graph.
- Revisar la indexación cuando la aplicación esté publicada.
- Evaluar la creación de páginas individuales para los comercios si el proyecto amplía su alcance.

## 8. Alcance actual

El proyecto cuenta con una página principal y metadatos generales. La configuración SEO es básica y puede ampliarse cuando se publique la aplicación y se incorporen nuevas páginas.