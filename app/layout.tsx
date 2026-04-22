import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://DarioSanchez99.github.io/bricocompacto"),
  title: {
    default: "BricoCompacto — Herramientas y jardín para pisos pequeños",
    template: "%s | BricoCompacto",
  },
  description:
    "Las mejores herramientas de bricolaje, aspiradores y soluciones de jardín para pisos pequeños y espacios reducidos. Análisis honestos y guías de compra.",
  openGraph: {
    siteName: "BricoCompacto",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <p className="text-center text-xs text-gray-400 py-2 bg-white border-t border-gray-200 px-4">
          Como asociado de Amazon, obtenemos ingresos por las compras que
          califican. Esto no afecta a nuestras opiniones ni recomendaciones.
        </p>
      </body>
    </html>
  );
}
