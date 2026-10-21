# 06-DISENO-UI — ¿Cómo se ven las pantallas?

> Todos los colores y tipografías vienen de `IDENTIDAD-MARCA.md`. No se usan otros.

## Pantallas

| Pantalla | Ruta | Usuario | Contenido principal |
|---|---|---|---|
| Inicio | `/` | Todos | Logo, eslogan, buscador y botón «Sacá tu turno» |
| Registro | `/registro` | Cliente / Dueño | Formulario de alta de cuenta |
| Ingreso | `/ingresar` | Todos | Formulario de correo y contraseña |
| Listado de peluquerías | `/peluquerias` | Cliente | Tarjetas de peluquerías con buscador |
| Perfil de peluquería | `/peluquerias/[id]` | Cliente | Descripción, servicios, profesionales y botón de reserva |
| Reserva | `/reservar/[peluqueriaId]` | Cliente | Pasos: servicio, profesional, fecha y horario, confirmación |
| Mis turnos | `/mis-turnos` | Cliente | Lista de turnos con opciones de reprogramar y cancelar |
| Panel de inicio | `/panel` | Dueño | Resumen de turnos de hoy |
| Agenda | `/panel/agenda` | Dueño / Profesional | Vista diaria y semanal |
| Servicios | `/panel/servicios` | Dueño | Alta, edición y baja de servicios |
| Profesionales | `/panel/profesionales` | Dueño | Profesionales y horarios de atención |

## Aplicación de la identidad

| Elemento | Fondo | Texto | Borde / detalle | Tipografía |
|---|---|---|---|---|
| Fondo general | Crema `#FFF3E7` | Texto oscuro `#3B1F17` | — | Open Sans |
| Barra superior | Terracota `#D2694A` | Blanco `#FFFFFF` | — | Montserrat Bold |
| Botón principal | Marrón profundo `#A73F22` | Blanco `#FFFFFF` | — | Montserrat SemiBold |
| Botón secundario | Blanco `#FFFFFF` | Marrón profundo `#A73F22` | Borde Terracota `#D2694A` | Montserrat SemiBold |
| Tarjeta | Blanco `#FFFFFF` | Texto oscuro `#3B1F17` | Borde Dorado `#E8C581` | Open Sans |
| Campo de formulario | Blanco `#FFFFFF` | Texto oscuro `#3B1F17` | Borde Dorado `#E8C581`; al enfocar, Terracota | Open Sans |
| Horario disponible | Blanco `#FFFFFF` | Marrón profundo `#A73F22` | Borde Dorado `#E8C581` | Montserrat SemiBold |
| Horario elegido | Terracota `#D2694A` | Blanco `#FFFFFF` | — | Montserrat SemiBold |
| Horario ocupado | Crema `#FFF3E7` | Texto oscuro con baja opacidad | Sin borde | Montserrat |

## Componentes

- **Botones:** esquinas redondeadas (12 px), altura mínima de 44 px para uso táctil.
- **Tarjetas:** esquinas redondeadas (16 px) y sombra suave, como el ícono del logo.
- **Formularios:** etiqueta visible sobre cada campo; mensajes de error con el tono de voz de la marca.
- **Íconos:** reloj, tijeras y calendario como motivos recurrentes.

## Variables de color

```css
:root {
  --color-terracota: #D2694A;
  --color-marron: #A73F22;
  --color-dorado: #E8C581;
  --color-blanco: #FFFFFF;
  --color-crema: #FFF3E7;
  --color-texto: #3B1F17;
}
```

## Reglas de diseño

- Diseño **mobile first**: se piensa primero para 360 px de ancho.
- Un solo botón principal por pantalla.
- El logo siempre aparece en la barra superior y enlaza al inicio.
- Mensajes breves, en voseo y sin tecnicismos.
