
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ReservaForm from "@/components/ReservaForm";

const salones = [
  {
    id: 1,
    nombre: "Estilo Norte",
    iniciales: "EN",
    zona: "Centro",
    categoria: "Peluquería",
    precio: 6500,
    servicios: ["Corte clásico", "Corte moderno", "Peinado"],
    color: "bg-[#E8C581]",
  },
  {
    id: 2,
    nombre: "Barbería Urbana",
    iniciales: "BU",
    zona: "Zona norte",
    categoria: "Barbería",
    precio: 5000,
    servicios: ["Corte masculino", "Barba", "Corte + barba"],
    color: "bg-[#D2694A]",
  },
  {
    id: 3,
    nombre: "Punto de Estilo",
    iniciales: "PE",
    zona: "Centro",
    categoria: "Peluquería",
    precio: 7000,
    servicios: ["Corte", "Coloración", "Brushing"],
    color: "bg-[#A73F22]",
  },
];

const imagenesCarrusel = [
  {
    src: "/marca/1.jfif",
    alt: "Presentación de turnoLibre",
  },
  {
    src: "/marca/2.jfif",
    alt: "Búsqueda de peluquerías y barberías",
  },
  {
    src: "/marca/3.jfif",
    alt: "Selección de servicios y profesionales",
  },
  {
    src: "/marca/4.jfif",
    alt: "Elección del día y horario",
  },
  {
    src: "/marca/5.jfif",
    alt: "Confirmación de la reserva",
  },
  {
    src: "/marca/6.jfif",
    alt: "Cancelación de un turno",
  },
  {
    src: "/marca/7.jfif",
    alt: "Información de turnoLibre",
  },
  {
    src: "/marca/logo-banner.png",
    alt: "Banner de turnoLibre",
  },
];

const formatoPrecio = (precio: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(precio);

export default function Home() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [salonSeleccionado, setSalonSeleccionado] =
    useState<(typeof salones)[number] | null>(null);

  const [imagenCentral, setImagenCentral] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null);

  // Estados del formulario de cancelación.
  const [mostrarCancelacion, setMostrarCancelacion] = useState(false);
  const [codigoCancelacion, setCodigoCancelacion] = useState("");
  const [contactoCancelacion, setContactoCancelacion] = useState("");
  const [procesandoCancelacion, setProcesandoCancelacion] = useState(false);
  const [mensajeCancelacion, setMensajeCancelacion] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState<"error" | "exito" | "">("");

  // El carrusel avanza automáticamente cada 4 segundos.
  // Se pausa mientras una imagen está ampliada.
  useEffect(() => {
    if (imagenAmpliada) return;

    const intervalo = window.setInterval(() => {
      setImagenCentral((actual) => (actual + 1) % imagenesCarrusel.length);
    }, 4000);

    return () => window.clearInterval(intervalo);
  }, [imagenAmpliada]);

  // Permite cerrar la imagen ampliada con la tecla Escape.
  useEffect(() => {
    if (!imagenAmpliada) return;

    const cerrarConEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setImagenAmpliada(null);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [imagenAmpliada]);

  // Permite cerrar la ventana de cancelación con Escape.
  useEffect(() => {
    if (!mostrarCancelacion || procesandoCancelacion) return;

    const cerrarConEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setMostrarCancelacion(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [mostrarCancelacion, procesandoCancelacion]);

  const resultados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();

    return salones.filter((salon) => {
      const coincideTexto =
        salon.nombre.toLowerCase().includes(termino) ||
        salon.zona.toLowerCase().includes(termino) ||
        salon.servicios.some((servicio) =>
          servicio.toLowerCase().includes(termino)
        );

      const coincideCategoria =
        categoria === "Todos" || salon.categoria === categoria;

      return coincideTexto && coincideCategoria;
    });
  }, [busqueda, categoria]);

  // Envía la solicitud de cancelación a la API.
  async function cancelarTurno(
    evento: React.FormEvent<HTMLFormElement>
  ) {
    evento.preventDefault();

    setProcesandoCancelacion(true);
    setMensajeCancelacion("");
    setTipoMensaje("");

    try {
      const respuesta = await fetch("/api/reservas", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo: codigoCancelacion.trim().toUpperCase(),
          contacto: contactoCancelacion.trim(),
        }),
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        setTipoMensaje("error");
        setMensajeCancelacion(
          resultado.error || "No se pudo cancelar el turno."
        );
        return;
      }

      setTipoMensaje("exito");
      setMensajeCancelacion(resultado.mensaje);
      setCodigoCancelacion("");
      setContactoCancelacion("");
    } catch {
      setTipoMensaje("error");
      setMensajeCancelacion(
        "No se pudo conectar con el servidor. Intentá nuevamente."
      );
    } finally {
      setProcesandoCancelacion(false);
    }
  }

  // Abre el formulario de cancelación.
  function abrirCancelacion() {
    setMensajeCancelacion("");
    setTipoMensaje("");
    setCodigoCancelacion("");
    setContactoCancelacion("");
    setMostrarCancelacion(true);
  }

  return (
    <main className="min-h-screen bg-[#FFF3E7] text-[#3B1F17]">
      <header className="border-b border-[#3B1F17]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="turnoLibre, inicio"
          >
            <Image
              src="/marca/logo1.png"
              alt="Logo de turnoLibre"
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl object-contain"
            />

            <span>
              <span className="block text-xl font-extrabold tracking-tight">
                turno<span className="text-[#D2694A]">Libre</span>
              </span>

              <span className="block text-xs text-[#3B1F17]/65">
                Tu turno, sin vueltas
              </span>
            </span>
          </a>

          <nav className="flex items-center gap-2 text-xs font-semibold sm:gap-4 sm:text-sm">
            <a
              href="#salones"
              className="hidden transition hover:text-[#D2694A] sm:inline"
            >
              Buscar salones
            </a>

            <a
              href="#como-funciona"
              className="hidden transition hover:text-[#D2694A] md:inline"
            >
              Cómo funciona
            </a>

            <button
              type="button"
              onClick={abrirCancelacion}
              className="rounded-full border border-[#A73F22] px-3 py-2.5 text-[#A73F22] transition hover:bg-[#FFF3E7] sm:px-4"
            >
              Cancelar turno
            </button>

            <a
              href="#salones"
              className="rounded-full bg-[#A73F22] px-3 py-2.5 text-white transition hover:bg-[#87331D] sm:px-4"
            >
              Sacar turno
            </a>
          </nav>
        </div>
      </header>

      {/* Carrusel de identidad visual */}
      <section className="overflow-hidden px-3 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative mx-auto h-64 w-full sm:h-80 lg:h-96">
            {imagenesCarrusel.map((imagen, indice) => {
              const posicion =
                (indice - imagenCentral + imagenesCarrusel.length) %
                imagenesCarrusel.length;

              const esCentral = posicion === 0;
              const esDerecha = posicion === 1;
              const esIzquierda = posicion === imagenesCarrusel.length - 1;

              const posicionClase = esCentral
                ? "left-1/2 z-20 -translate-x-1/2 scale-100 opacity-100"
                : esDerecha
                  ? "left-[82%] z-10 -translate-x-1/2 scale-75 opacity-65"
                  : esIzquierda
                    ? "left-[18%] z-10 -translate-x-1/2 scale-75 opacity-65"
                    : "left-1/2 z-0 -translate-x-1/2 scale-50 opacity-0 pointer-events-none";

              return (
                <button
                  key={imagen.src}
                  type="button"
                  onClick={() => setImagenAmpliada(imagen.src)}
                  aria-label={`Ampliar ${imagen.alt}`}
                  className={`absolute top-1/2 flex h-44 w-[62%] -translate-y-1/2 items-center justify-center overflow-hidden rounded-3xl border border-[#3B1F17]/10 bg-white p-3 shadow-xl transition-all duration-700 ease-in-out hover:shadow-2xl sm:h-60 sm:w-[55%] lg:h-72 ${posicionClase} ${
                    esCentral ? "cursor-zoom-in" : "cursor-pointer"
                  }`}
                >
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    sizes="(max-width: 640px) 62vw, 55vw"
                    priority={indice === 0}
                    className="rounded-3xl object-contain p-2 sm:p-4"
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {imagenesCarrusel.map((imagen, indice) => (
              <button
                key={imagen.src}
                type="button"
                onClick={() => setImagenCentral(indice)}
                aria-label={`Mostrar imagen ${indice + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  imagenCentral === indice
                    ? "w-8 bg-[#A73F22]"
                    : "w-2.5 bg-[#D2694A]/30 hover:bg-[#D2694A]/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Imagen ampliada */}
      {imagenAmpliada && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={() => setImagenAmpliada(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b100d]/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setImagenAmpliada(null)}
            aria-label="Cerrar imagen"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#3B1F17] shadow-lg transition hover:bg-[#FFF3E7]"
          >
            ×
          </button>

          <div
            onClick={(evento) => evento.stopPropagation()}
            className="relative h-[75vh] w-full max-w-5xl"
          >
            <Image
              src={imagenAmpliada}
              alt="Imagen de turnoLibre ampliada"
              fill
              sizes="100vw"
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      )}

      <section className="relative overflow-hidden">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#E8C581]/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#D2694A]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D2694A]/25 bg-white/80 px-4 py-2 text-sm font-semibold text-[#A73F22]">
              <span className="h-2 w-2 rounded-full bg-[#D2694A]" />
              Tu próximo look empieza acá
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Tu tiempo vale.
              <br />
              Tu estilo también.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#3B1F17]/75">
              Encontrá peluquerías y barberías, elegí el servicio que querés
              y organizá tu próximo turno en un solo lugar.
            </p>

            <a
              href="#salones"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#A73F22] px-7 py-4 font-bold text-white shadow-lg shadow-[#A73F22]/20 transition hover:-translate-y-0.5 hover:bg-[#87331D]"
            >
              Encontrar mi próximo turno
              <span aria-hidden="true">→</span>
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#3B1F17]/70">
              <span>✓ Elegí a tu ritmo</span>
              <span>✓ Compará servicios</span>
              <span>✓ Organizá tu tiempo</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-[#3B1F17]/10 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#3B1F17]/60">
                    Una nueva forma de organizarte
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold">
                    Tu próximo turno
                  </h2>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF3E7] text-2xl">
                  ✂
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF3E7] p-4">
                <p className="text-sm font-semibold text-[#A73F22]">
                  PASO 1
                </p>
                <p className="mt-1 font-bold">Elegí dónde atenderte</p>
                <p className="mt-1 text-sm text-[#3B1F17]/65">
                  Explorá opciones y servicios disponibles.
                </p>
              </div>

              <div className="my-2 ml-8 h-5 border-l-2 border-dashed border-[#E8C581]" />

              <div className="rounded-2xl bg-[#FFF3E7] p-4">
                <p className="text-sm font-semibold text-[#A73F22]">
                  PASO 2
                </p>
                <p className="mt-1 font-bold">Encontrá tu horario</p>
                <p className="mt-1 text-sm text-[#3B1F17]/65">
                  Consultá los horarios y elegí el que te sirva.
                </p>
              </div>

              <div className="my-2 ml-8 h-5 border-l-2 border-dashed border-[#E8C581]" />

              <div className="rounded-2xl bg-[#3B1F17] p-4 text-white">
                <p className="text-sm font-semibold text-[#E8C581]">
                  PASO 3
                </p>
                <p className="mt-1 font-bold">Confirmá tu reserva</p>
                <p className="mt-1 text-sm text-white/70">
                  Todo más claro, sin vueltas.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-xs text-[#3B1F17]/60">
                Tu agenda, más simple
              </p>
              <p className="font-bold text-[#A73F22]">A tu manera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video promocional de turnoLibre */}
      <section
        id="video"
        className="bg-[#FFF3E7] px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D2694A]">
              Conocé nuestra propuesta
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Tu próximo turno, sin vueltas
            </h2>

            <p className="mt-4 leading-7 text-[#3B1F17]/70">
              Mirá cómo funciona turnoLibre y descubrí una forma más simple
              de organizar tus reservas.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#3B1F17]/10 bg-black shadow-xl">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/zzvzDewmoyU"
                title="Video promocional de turnoLibre"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
            <section
        id="salones"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D2694A]">
                Encontrá tu lugar
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Salones para vos
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-[#3B1F17]/65">
                Explorá opciones de ejemplo y buscá por nombre, zona o servicio.
              </p>
            </div>

            <span className="text-sm text-[#3B1F17]/60">
              {resultados.length} opciones
            </span>
          </div>

          <div className="mt-8 grid gap-3 rounded-3xl bg-[#FFF3E7] p-4 sm:grid-cols-[1fr_220px] sm:p-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                ¿Qué estás buscando?
              </span>

              <input
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
                placeholder="Ej.: corte, barba, Centro..."
                className="w-full rounded-2xl border border-[#3B1F17]/10 bg-white px-4 py-3.5 outline-none transition placeholder:text-[#3B1F17]/40 focus:border-[#D2694A] focus:ring-2 focus:ring-[#D2694A]/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Tipo de lugar
              </span>

              <select
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
                className="w-full rounded-2xl border border-[#3B1F17]/10 bg-white px-4 py-3.5 outline-none focus:border-[#D2694A]"
              >
                <option>Todos</option>
                <option>Peluquería</option>
                <option>Barbería</option>
              </select>
            </label>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resultados.map((salon) => (
              <article
                key={salon.id}
                className="overflow-hidden rounded-3xl border border-[#3B1F17]/10 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3B1F17]/5"
              >
                <div className="flex items-center gap-4 p-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${salon.color} text-xl font-extrabold text-white`}
                  >
                    {salon.iniciales}
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D2694A]">
                      {salon.categoria}
                    </span>

                    <h3 className="mt-1 truncate text-lg font-extrabold">
                      {salon.nombre}
                    </h3>

                    <p className="mt-1 text-sm text-[#3B1F17]/60">
                      {salon.zona}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="border-t border-[#3B1F17]/10 pt-4">
                    <p className="text-sm font-semibold">Servicios</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {salon.servicios.map((servicio) => (
                        <span
                          key={servicio}
                          className="rounded-full bg-[#FFF3E7] px-3 py-1.5 text-xs font-medium text-[#3B1F17]/75"
                        >
                          {servicio}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#3B1F17]/55">
                        Servicios desde
                      </p>
                      <p className="mt-1 text-lg font-extrabold">
                        {formatoPrecio(salon.precio)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSalonSeleccionado(salon)}
                      className="rounded-full bg-[#A73F22] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#87331D]"
                    >
                      Sacar turno
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {resultados.length === 0 && (
              <div className="rounded-3xl border border-dashed border-[#3B1F17]/20 px-5 py-12 text-center md:col-span-2 lg:col-span-3">
                <h3 className="text-lg font-bold">
                  No encontramos opciones
                </h3>
                <p className="mt-2 text-sm text-[#3B1F17]/65">
                  Probá con otro nombre, servicio o tipo de lugar.
                </p>
                <button
                  onClick={() => {
                    setBusqueda("");
                    setCategoria("Todos");
                  }}
                  className="mt-5 rounded-full bg-[#FFF3E7] px-5 py-3 text-sm font-bold text-[#A73F22] hover:bg-[#E8C581]/40"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </div>

          <p className="mt-6 text-xs leading-5 text-[#3B1F17]/50">
            Prototipo académico: los nombres, precios y servicios son datos
            ilustrativos. Todavía no representan comercios reales. Las reservas
            se almacenan en la base de datos del prototipo.
          </p>
        </div>
      </section>

      <section
        id="como-funciona"
        className="px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D2694A]">
              Simple desde el comienzo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Menos vueltas. Más tiempo para vos.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                numero: "01",
                titulo: "Buscá",
                texto:
                  "Encontrá un lugar y explorá los servicios que ofrece.",
              },
              {
                numero: "02",
                titulo: "Elegí",
                texto:
                  "Compará opciones y encontrá la que mejor se adapte a vos.",
              },
              {
                numero: "03",
                titulo: "Reservá",
                texto:
                  "El objetivo es que puedas elegir un horario y confirmar tu turno.",
              },
            ].map((paso) => (
              <article
                key={paso.numero}
                className="rounded-3xl border border-[#3B1F17]/10 bg-white p-6 sm:p-8"
              >
                <span className="text-4xl font-extrabold text-[#D2694A]/45">
                  {paso.numero}
                </span>
                <h3 className="mt-4 text-xl font-extrabold">
                  {paso.titulo}
                </h3>
                <p className="mt-3 leading-7 text-[#3B1F17]/65">
                  {paso.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ventana para cancelar un turno */}
      {mostrarCancelacion && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-[#1b100d]/75 p-4 backdrop-blur-sm"
          onClick={() => {
            if (!procesandoCancelacion) {
              setMostrarCancelacion(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-cancelacion"
            className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(evento) => evento.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setMostrarCancelacion(false)}
              disabled={procesandoCancelacion}
              aria-label="Cerrar ventana"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3E7] text-xl font-bold hover:bg-[#E8C581]/50 disabled:opacity-50"
            >
              ×
            </button>

            <div className="mb-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3E7] text-2xl">
                ✂
              </span>

              <h2
                id="titulo-cancelacion"
                className="mt-5 text-2xl font-extrabold"
              >
                Cancelar turno
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#3B1F17]/65">
                Ingresá el código de tu reserva y el teléfono que utilizaste
                al solicitar el turno.
              </p>
            </div>

            <form onSubmit={cancelarTurno} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  Código de reserva
                </span>

                <input
                  type="text"
                  value={codigoCancelacion}
                  onChange={(evento) =>
                    setCodigoCancelacion(evento.target.value.toUpperCase())
                  }
                  placeholder="TL-XXXXXX"
                  maxLength={9}
                  pattern="TL-[A-HJ-NP-Z2-9]{6}"
                  title="Ingresá un código con el formato TL-XXXXXX."
                  required
                  disabled={procesandoCancelacion}
                  className="w-full rounded-2xl border border-[#3B1F17]/15 px-4 py-3.5 uppercase outline-none focus:border-[#D2694A] focus:ring-2 focus:ring-[#D2694A]/15"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  Teléfono de contacto
                </span>

                <input
                  type="tel"
                  value={contactoCancelacion}
                  onChange={(evento) =>
                    setContactoCancelacion(evento.target.value)
                  }
                  placeholder="Ingresá tu teléfono"
                  maxLength={50}
                  required
                  disabled={procesandoCancelacion}
                  className="w-full rounded-2xl border border-[#3B1F17]/15 px-4 py-3.5 outline-none focus:border-[#D2694A] focus:ring-2 focus:ring-[#D2694A]/15"
                />
              </label>

              <div className="rounded-2xl bg-[#FFF3E7] p-4 text-sm leading-6 text-[#3B1F17]/75">
                Podés cancelar tu turno hasta una hora antes de su comienzo.
                Después de ese plazo, la cancelación no estará disponible.
              </div>

              {mensajeCancelacion && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`rounded-2xl p-4 text-sm font-semibold ${
                    tipoMensaje === "exito"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {mensajeCancelacion}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  procesandoCancelacion ||
                  !codigoCancelacion.trim() ||
                  !contactoCancelacion.trim()
                }
                className="w-full rounded-full bg-[#A73F22] px-6 py-3.5 font-bold text-white transition hover:bg-[#87331D] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {procesandoCancelacion
                  ? "Procesando..."
                  : "Confirmar cancelación"}
              </button>
            </form>
          </section>
        </div>
      )}

      {salonSeleccionado && (
        <ReservaForm
          salon={salonSeleccionado}
          onCerrar={() => setSalonSeleccionado(null)}
        />
      )}

      <footer className="bg-[#3B1F17] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-extrabold">
            turno<span className="text-[#E8C581]">Libre</span>
          </p>
          <p className="text-sm text-white/65">
            Tu turno, sin vueltas. · Prototipo académico 2026
          </p>
        </div>
      </footer>
    </main>
  );
}