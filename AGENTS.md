# AGENTS.md — turnoLibre

> Índice y reglas para cualquier agente de IA que trabaje en este proyecto.
> **Leer este archivo completo antes de escribir una sola línea de código.**

## ¿Qué es turnoLibre?

**turnoLibre** es una aplicación web para peluquerías y barberías donde los clientes
reservan turnos online en pocos pasos y los dueños administran su agenda, sus servicios
y a sus profesionales desde un panel simple. El objetivo es eliminar el "¿tenés lugar
hoy?" por WhatsApp y evitar los turnos superpuestos o perdidos.

- **Eslogan:** *Tu turno, sin vueltas.*
- **Tipo de proyecto:** aplicación web responsive (mobile first).
- **Estado:** en etapa de especificación (Trabajo Práctico N.º 3).

## Archivos de especificación

Cada archivo de `docs/` responde **una sola pregunta**. Leelos en este orden:

| Archivo | Pregunta que responde | Cuándo consultarlo |
|---|---|---|
| `docs/IDENTIDAD-MARCA.md` | ¿Cómo nos vemos y cómo hablamos? | Antes de escribir cualquier texto o color |
| `docs/01-CONTEXTO.md` | ¿Por qué existe y para quién es? | Al empezar cualquier tarea |
| `docs/02-REQUERIMIENTOS.md` | ¿Qué tiene que hacer? | Antes de crear una funcionalidad |
| `docs/03-TECNOLOGIAS.md` | ¿Con qué lo construimos? | Antes de instalar una librería |
| `docs/04-ARQUITECTURA.md` | ¿Cómo se organiza el código? | Antes de crear carpetas o archivos |
| `docs/05-DATOS.md` | ¿Qué información guarda? | Al tocar la base de datos |
| `docs/06-DISENO-UI.md` | ¿Cómo se ven las pantallas? | Al crear o modificar interfaz |
| `docs/07-CONVENCIONES.md` | ¿Cómo escribimos el código? | En cada archivo nuevo y en cada commit |
| `docs/08-TAREAS.md` | ¿En qué orden lo hacemos? | Para saber qué sigue |
| `docs/09-SEO.md` | ¿Cómo nos encuentran en Google? | Al crear páginas públicas |
| `docs/10-SEGURIDAD.md` | ¿Cómo protegemos datos y sistema? | Antes de manejar datos o credenciales |

## Reglas generales

### Qué hacer

- Leer los archivos de `docs/` relevantes **antes** de proponer o escribir código.
- Trabajar **una tarea de `08-TAREAS.md` por vez** y tildarla al terminarla.
- Respetar la paleta, las tipografías y el tono de voz de `IDENTIDAD-MARCA.md`.
- Escribir el código en inglés y los textos visibles para el usuario en español rioplatense (voseo).
- Validar todos los datos que llegan del usuario, en el cliente **y** en el servidor.
- Preguntar si una instrucción es ambigua o contradice un archivo de `docs/`.

### Qué no hacer

- No inventar funcionalidades que no estén en `02-REQUERIMIENTOS.md`.
- No implementar nada de la sección «No incluye (por ahora)» de `01-CONTEXTO.md`.
- No agregar librerías ni cambiar el stack sin aprobarlo y registrarlo en `03-TECNOLOGIAS.md`.
- No usar colores ni tipografías fuera de las definidas en la identidad de marca.
- No subir al repositorio claves, contraseñas ni archivos `.env`.
- No guardar datos de tarjetas ni contraseñas en texto plano.
- No usar nombres, logos ni datos de peluquerías reales: todo ejemplo debe ser ficticio.

## Comandos útiles

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo en http://localhost:3000
npm run lint       # revisar el estilo del código
npm run build      # compilar para producción
```
