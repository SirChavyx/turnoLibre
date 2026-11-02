# 06 - Diseño de la interfaz de usuario

## 1. Características generales

Turnolibre cuenta con una interfaz web adaptable a computadoras, tablets y teléfonos celulares. El diseño sigue el enfoque **mobile first**, priorizando la facilidad de uso y la navegación sencilla.

La aplicación utiliza los colores y elementos visuales definidos en `IDENTIDAD-MARCA.md`. Los textos están redactados en español, con un lenguaje claro y cercano.

## 2. Pantallas y secciones implementadas

La versión actual concentra las funciones principales en la página de inicio (`/`).

| Sección | Ubicación | Contenido y función |
|---|---|---|
| Encabezado | `/` | Logo, nombre de la aplicación, eslogan y accesos de navegación. |
| Carrusel de imágenes | `/` | Presenta imágenes de la identidad visual de Turnolibre. Avanza automáticamente y permite ampliar las imágenes. |
| Presentación | `/` | Explica el propósito de la aplicación y ofrece acceso a la búsqueda de salones. |
| Búsqueda de salones | `/` | Permite buscar por nombre, zona o servicio y filtrar por categoría. |
| Tarjetas de salones | `/` | Muestran nombre, ubicación, categoría, servicios, precio de referencia y acceso a la reserva. |
| Formulario de reserva | Ventana emergente | Permite seleccionar servicio, profesional, fecha y horario, e ingresar los datos del cliente. |
| Cancelación de turnos | Ventana emergente | Solicita el código de reserva y el teléfono de contacto para gestionar la cancelación. |
| Confirmación de reserva | Formulario de reserva | Presenta el resultado de la operación y los datos de la reserva, incluido el código de identificación. |
| Pie de página | `/` | Muestra el nombre, eslogan y referencia al prototipo académico. |

## 3. Proceso de reserva

El usuario puede realizar una reserva siguiendo estos pasos:

1. Ingresar a la página principal.
2. Buscar un salón por nombre, zona o servicio, o utilizar el filtro por categoría.
3. Seleccionar el salón y abrir el formulario de reserva.
4. Elegir el servicio, el profesional, la fecha y un horario disponible.
5. Completar el nombre y el dato de contacto.
6. Confirmar la solicitud y obtener el código de reserva.

La disponibilidad de horarios se consulta mediante la API y los datos se almacenan en la base de datos Turso.

## 4. Cancelación de turnos

La opción «Cancelar turno» se encuentra en el encabezado de la página principal.

Para solicitar una cancelación, el cliente debe ingresar:

- Código de la reserva.
- Teléfono de contacto utilizado al solicitar el turno.

La interfaz informa si la operación se realizó correctamente o si existe algún inconveniente. La cancelación está permitida hasta una hora antes del comienzo del turno.

## 5. Aplicación de la identidad visual

| Elemento | Color de referencia | Aplicación |
|---|---|---|
| Fondo general | Crema `#FFF3E7` | Fondo principal de la aplicación. |
| Barra superior | Blanco `#FFFFFF` | Encabezado y navegación. |
| Botón principal | Marrón `#A73F22` | Acciones principales, como reservar. |
| Detalles y destacados | Terracota `#D2694A` | Títulos, enlaces y elementos de énfasis. |
| Detalles secundarios | Dorado `#E8C581` | Fondos, bordes y elementos decorativos. |
| Texto principal | Marrón oscuro `#3B1F17` | Títulos y contenido general. |
| Tarjetas | Blanco `#FFFFFF` | Salones, formularios y secciones de contenido. |

Las tipografías y demás elementos de identidad se encuentran definidos en `IDENTIDAD-MARCA.md` y se aplican mediante los estilos de la interfaz.

## 6. Componentes de la interfaz

- **Encabezado:** contiene el logo, el nombre de Turnolibre, el eslogan y los accesos principales.
- **Carrusel:** presenta las imágenes de la marca y permite ampliarlas.
- **Buscador:** permite ingresar palabras relacionadas con salones, zonas o servicios.
- **Filtro:** permite seleccionar entre todas las opciones, peluquerías y barberías.
- **Tarjetas:** presentan la información de cada salón y el botón para iniciar una reserva.
- **Formularios:** contienen campos identificados mediante etiquetas y mensajes de validación.
- **Ventanas emergentes:** permiten realizar reservas y cancelaciones sin cambiar de página.
- **Mensajes de estado:** informan el resultado de las operaciones.
- **Comprobante:** presenta los datos de la reserva y su código de identificación.

## 7. Reglas de diseño

- Diseño adaptable a distintos tamaños de pantalla.
- Prioridad de uso en dispositivos móviles.
- Navegación sencilla y textos breves.
- Botones y campos de formulario claramente identificados.
- Uso coherente de los colores de la identidad visual.
- Mensajes de confirmación y error comprensibles.
- Separación visual entre las distintas secciones.
- Uso de ventanas emergentes para los formularios de reserva y cancelación.

## 8. Alcance de la interfaz actual

La versión implementada corresponde a un prototipo académico funcional. Incluye la búsqueda de salones, la consulta de opciones, la reserva de turnos y la cancelación mediante código y dato de contacto.

No incluye pantallas de registro o inicio de sesión, perfiles de usuarios, panel de administración, gestión de servicios ni agenda para propietarios. Estas funciones quedan fuera del alcance de la versión actual.
