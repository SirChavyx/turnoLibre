# MEMORIA DEL PROYECTO — turnoLibre

## 1. Identificación

- Nombre: turnoLibre.
- Eslogan: Tu turno, sin vueltas.
- Contexto: Trabajo Final Integrador de 3.º año de la Tecnicatura Superior en Desarrollo de Software.
- Objetivo: aplicación web responsive para gestionar reservas en peluquerías y barberías.
- Idioma de la interfaz: español rioplatense, con voseo.

## 2. Identidad de marca

- Colores: #D2694A, #A73F22, #E8C581, #FFFFFF, #FFF3E7 y #3B1F17.
- Tipografías: Montserrat para títulos y botones; Open Sans para textos generales.
- Tono: cercano, claro, amable y profesional.
- Documento principal: docs/IDENTIDAD-MARCA.md.
- Recursos gráficos: carpeta marca/.

No inventar otra identidad visual. Consultar la documentación antes de modificar estilos o textos de marca.

## 3. Tecnologías previstas

- Next.js con App Router.
- TypeScript.
- Tailwind CSS.
- PostgreSQL y Prisma.
- Auth.js para autenticación.
- Zod para validación.
- Resend para correo electrónico.
- Git y GitHub para control de versiones.
- Vercel como opción de despliegue.

Las tecnologías están definidas en la documentación, pero la aplicación todavía no fue creada y no se instalaron dependencias.

## 4. Alcance funcional

El proyecto contempla:
- Registro e inicio de sesión.
- Búsqueda y consulta de peluquerías y barberías.
- Consulta de servicios y profesionales.
- Selección de fecha y horario.
- Creación y consulta de reservas.
- Prevención de turnos superpuestos.
- Panel de gestión para los negocios.
- Recordatorios por correo electrónico.

Fuera del alcance definido:
- Pagos en línea.
- Recordatorios por WhatsApp.
- Aplicación móvil nativa.

No agregar funcionalidades nuevas sin justificar su necesidad y consultar cuando cambien el alcance acordado.

## 5. Documentación de referencia

En la raíz:
- AGENTS.md: instrucciones de trabajo.
- CONSTITUCION.md: principios y reglas del proyecto.
- .gitignore: archivos excluidos de Git.

En docs/:
- 01-CONTEXTO.md
- 02-REQUERIMIENTOS.md
- 03-TECNOLOGIAS.md
- 04-ARQUITECTURA.md
- 05-DATOS.md
- 06-DISENO-UI.md
- 07-CONVENCIONES.md
- 08-TAREAS.md
- 09-SEO.md
- 10-SEGURIDAD.md
- IDENTIDAD-MARCA.md

Leer los documentos relevantes antes de proponer cambios. Si hay contradicciones o falta información importante, detenerse y preguntar.

## 6. Reglas para trabajar con IA

- Trabajar una tarea por vez.
- Comprender los requisitos antes de programar.
- No inventar requisitos ni declarar una tarea terminada sin verificarla.
- Respetar CONSTITUCION.md y AGENTS.md.
- Mantener el código en inglés y la interfaz en español rioplatense.
- Validar los datos en el servidor, especialmente las reservas.
- No exponer contraseñas, claves ni variables de entorno.
- No reemplazar tecnologías sin justificarlo.
- Registrar prompts relevantes, errores reales y correcciones en docs/PROMPTS.md.
- Revisar los cambios antes de incorporarlos al proyecto.
- No afirmar que se ejecutaron pruebas si no se ejecutaron realmente.

## 7. Consideraciones técnicas

La disponibilidad de turnos debe comprobarse en el servidor. Una restricción única sobre profesional e inicio no alcanza por sí sola para impedir todos los solapamientos entre intervalos.

La solución deberá contemplar validación de horarios, duración del servicio, concurrencia y consistencia de los datos.

## 8. Estado actual

- Documentación base creada.
- Identidad de marca definida.
- AGENTS.md y CONSTITUCION.md presentes.
- Git inicializado.
- Primer commit local: 2c37269.
- Mensaje del commit: docs: establish turnoLibre project foundation.
- Se verificó que Git registra 18 archivos.
- git status --short no mostró cambios pendientes.
- No existe todavía una aplicación Next.js en la carpeta.
- No se instalaron dependencias.
- No se configuró todavía un repositorio remoto de GitHub.

## 9. Próximos pasos

1. Crear y revisar esta memoria de trabajo.
2. Preparar docs/PROMPTS.md.
3. Definir procedimientos reutilizables para especificar, aclarar y verificar tareas: /spec, /clarificar y /verificar.
4. Preparar el procedimiento verificar-criterios.
5. Revisar los requisitos y resolver observaciones documentales.
6. Crear la aplicación cuando la preparación esté lista.
7. Implementar funcionalidades gradualmente y probar cada una.
8. Documentar el uso de IA y las evidencias solicitadas por el TFI.

## 10. Entorno de trabajo

- Sistema: Windows.
- Editor: Visual Studio Code.
- Terminal: PowerShell.
- Claude se utiliza desde su página web.
- Los archivos locales no son visibles automáticamente para Claude ni para ChatGPT: compartirlos cuando sea necesario.
- Dar instrucciones paso a paso y comprobar cada resultado antes de continuar.

Ante cualquier contradicción entre esta memoria, los requisitos y la constitución, revisar los documentos originales y preguntar antes de tomar decisiones.
