# 07 - Convenciones de desarrollo

## 1. Idioma

El proyecto utiliza español para la documentación, los comentarios y los nombres de variables y funciones relacionados con la lógica de la aplicación.

| Elemento | Idioma o criterio | Ejemplo |
|---|---|---|
| Variables y funciones | Español | `salones`, `cancelarTurno` |
| Componentes de React | PascalCase | `ReservaForm` |
| Textos visibles | Español rioplatense | «Elegí tu horario» |
| Documentación | Español | `04-ARQUITECTURA.md` |
| Comentarios | Español | `// Abre el formulario de cancelación` |
| Variables de entorno | Mayúsculas con guion bajo | `TURSO_DATABASE_URL` |

Los nombres propios de las tecnologías y las convenciones exigidas por los frameworks se mantienen en su idioma original.

## 2. Nombres de archivos y carpetas

Se respetan las convenciones de Next.js, React y TypeScript.

| Elemento | Convención | Ejemplo del proyecto |
|---|---|---|
| Componentes React | PascalCase | `ReservaForm.tsx` |
| Archivos de utilidades | camelCase | `db.ts` |
| Archivos de rutas API | Nombre establecido por Next.js | `route.ts` |
| Carpetas de componentes | Minúsculas | `components/` |
| Carpetas de utilidades | Minúsculas | `lib/` |
| Variables de entorno | MAYUS_CON_GUION_BAJO | `TURSO_AUTH_TOKEN` |

## 3. Estilo de código

El proyecto utiliza TypeScript y React con una estructura basada en componentes.

Se establecen los siguientes criterios:

- Utilizar TypeScript para el desarrollo de la aplicación.
- Mantener una indentación de dos espacios.
- Utilizar comillas dobles en las cadenas de código.
- Dar nombres claros a las variables y funciones.
- Separar las responsabilidades entre componentes, lógica de datos y rutas de API.
- Evitar duplicar código cuando una función o componente pueda reutilizarse.
- Utilizar clases de Tailwind CSS para los estilos de la interfaz.
- Mantener los textos visibles en español rioplatense.

## 4. Organización del código

Los archivos principales se distribuyen de la siguiente manera:

- `src/app/`: contiene las páginas, los estilos generales y las rutas de la aplicación.
- `src/components/`: contiene los componentes reutilizables de la interfaz.
- `src/lib/`: contiene funciones y recursos compartidos, como la conexión con la base de datos.
- `public/`: contiene imágenes y recursos estáticos.
- `docs/`: contiene la documentación del proyecto.

## 5. Commits

Los mensajes de commit deben describir brevemente el cambio realizado.

Se utiliza el formato:

`tipo: descripción breve`

| Tipo | Uso |
|---|---|
| `feat` | Incorporación de una funcionalidad. |
| `fix` | Corrección de un error. |
| `docs` | Modificación de documentación. |
| `style` | Cambios de formato o presentación sin modificar la lógica. |
| `refactor` | Reorganización del código sin cambiar su comportamiento. |
| `chore` | Tareas de mantenimiento o configuración. |

Ejemplos:

```text
feat: agrega formulario de reservas
fix: corrige la consulta de horarios
docs: actualiza el modelo de datos
chore: organiza los archivos del proyecto
```

## 6. Ramas de Git

Se contempla la siguiente organización:

- `main`: rama principal del proyecto.
- `feature/nombre-corto`: rama destinada al desarrollo de una funcionalidad específica.

La utilización de ramas adicionales depende de las necesidades del desarrollo.

## 7. Criterios de mantenimiento

- Mantener actualizada la documentación cuando se modifique la estructura del proyecto.
- No incorporar dependencias nuevas sin evaluar su necesidad y compatibilidad.
- No incluir credenciales ni datos privados en el repositorio.
- Conservar la coherencia entre el código, la arquitectura documentada y las tecnologías utilizadas.
- Registrar los cambios relevantes en `MATRIZ-IA.md` y `08-TAREAS.md`.