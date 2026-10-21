# 07-CONVENCIONES — ¿Cómo escribimos el código?

## Idioma

| Elemento | Idioma | Ejemplo |
|---|---|---|
| Código (variables, funciones, componentes) | Inglés | `getAvailableSlots` |
| Textos visibles para el usuario | Español rioplatense | "Elegí tu horario" |
| Documentación y comentarios | Español | `// Calcula los horarios libres del día` |
| Mensajes de commit | Español | `feat: agrega selector de horarios` |

## Nombres

| Elemento | Formato | Ejemplo |
|---|---|---|
| Componentes de React | PascalCase | `BookingForm.tsx` |
| Archivos de utilidades | camelCase | `availableSlots.ts` |
| Carpetas de rutas | kebab-case | `mis-turnos/` |
| Variables y funciones | camelCase | `selectedService` |
| Constantes | MAYUS_CON_GUION_BAJO | `MAX_BOOKING_DAYS` |
| Tipos e interfaces | PascalCase | `Appointment` |
| Variables de entorno | MAYUS_CON_GUION_BAJO | `DATABASE_URL` |

> Los nombres de `04-ARQUITECTURA.md` son orientativos: al implementar, los componentes
> se nombran en inglés según esta tabla.

## Estilo de código

- Usar TypeScript con tipos explícitos en funciones públicas.
- Indentación de 2 espacios y comillas dobles.
- Una función, un propósito; evitar funciones de más de 40 líneas.
- Estilos con clases de Tailwind y variables de color definidas en `globals.css`.

```typescript
// Ejemplo de función con las convenciones del proyecto
export function calculateEndTime(start: Date, durationMin: number): Date {
  return new Date(start.getTime() + durationMin * 60_000);
}
```

## Commits

Formato: `tipo: descripción corta en minúsculas y en presente`

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de un error |
| `docs` | Cambios en documentación |
| `style` | Cambios visuales o de formato sin alterar la lógica |
| `refactor` | Reorganización de código sin cambiar su comportamiento |
| `chore` | Tareas de mantenimiento o configuración |

```text
feat: agrega pantalla de reserva de turnos
fix: corrige el cálculo de horarios libres
docs: completa el archivo de datos
```

## Ramas

- `main`: versión estable publicada.
- `feature/nombre-corto`: una rama por funcionalidad (ej.: `feature/reserva-turnos`).
