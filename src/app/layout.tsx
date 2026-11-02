import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "turnoLibre App",
  description:
    "Sistema de reservas para peluquerías y barberías. Tu turno, sin vueltas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
