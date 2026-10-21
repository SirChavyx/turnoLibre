# 10-SEGURIDAD — ¿Cómo protegemos datos y sistema?

## Datos sensibles

| Dato | Nivel | Tratamiento |
|---|---|---|
| Contraseña | Crítico | Nunca se guarda en texto plano: se almacena cifrada con bcrypt |
| Correo electrónico | Sensible | Visible solo para el propio usuario y, en un turno, para la peluquería |
| Teléfono | Sensible | Visible solo para la peluquería donde se reservó el turno |
| Historial de turnos | Sensible | Cada cliente ve solo los suyos; cada peluquería, solo los de su local |
| Sesión del usuario | Crítico | Cookie `httpOnly` y `secure` administrada por Auth.js |

## Variables de entorno

Las claves se guardan en un archivo `.env` local y en el panel de Vercel. **Nunca** se
suben a GitHub.

```bash
# .env.example (sin valores reales)
DATABASE_URL=""
AUTH_SECRET=""
RESEND_API_KEY=""
APP_URL="http://localhost:3000"
```

- `.env` debe figurar en `.gitignore`.
- Si una clave se publica por error, se debe regenerar de inmediato.

## Validaciones

| Dato | Regla |
|---|---|
| Correo | Formato válido y único en la base |
| Contraseña | Mínimo 8 caracteres, con letras y números |
| Teléfono | Solo números, entre 8 y 15 dígitos |
| Fecha del turno | Futura, dentro de los próximos 60 días y dentro del horario de atención |
| Servicio y profesional | Deben pertenecer a la misma peluquería |
| Texto libre | Se limpia y se limita su largo para evitar código malicioso |

```typescript
import { z } from "zod";

export const bookingSchema = z.object({
  serviceId: z.string().uuid(),
  professionalId: z.string().uuid(),
  start: z.coerce.date().min(new Date()),
});
```

## Qué nunca debe llegar al navegador

- Contraseñas o su versión cifrada (`contrasena_hash`).
- Variables de entorno privadas (`DATABASE_URL`, `AUTH_SECRET`, `RESEND_API_KEY`).
- Datos de contacto de clientes de otras peluquerías.
- Mensajes de error técnicos o con detalles internos de la base de datos.

## Reglas de seguridad

- Toda validación se repite en el servidor: no alcanza con validar en el formulario.
- Cada endpoint verifica la sesión y el rol antes de responder.
- Se usa Prisma con consultas parametrizadas para evitar inyección SQL.
- La aplicación se publica solo con HTTPS.
- Se limita la cantidad de intentos de ingreso para frenar ataques de fuerza bruta.
- Se actualizan las dependencias con regularidad y se revisan los avisos de `npm audit`.
