import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guías de compra — BricoCompacto",
  description:
    "Guías de compra detalladas para elegir la herramienta perfecta según tu presupuesto y necesidades. Sin tecnicismos, con recomendaciones concretas.",
};

const guides = [
  { title: "Cómo elegir un taladro — Guía completa para principiantes", href: "/guias/como-elegir-taladro/", readTime: "10 min" },
  { title: "Guía de aspiradores: qué significa cada especificación", href: "/guias/guia-aspiradores-especificaciones/", readTime: "9 min" },
  { title: "Bricolaje básico en piso: las 10 herramientas mínimas", href: "/guias/bricolaje-basico-piso-herramientas/", readTime: "7 min" },
  { title: "Cómo colgar cuadros y estanterías sin dañar la pared", href: "/guias/colgar-cuadros-estanterias-piso/", readTime: "6 min" },
];

export default function GuiasPage() {
  return (
    <>
      <div className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-400 mb-3">
            <Link href="/" className="hover:text-white">Inicio</Link> › Guías de compra
          </nav>
          <h1 className="text-3xl font-bold mb-2">📋 Guías de compra</h1>
          <p className="text-gray-300 max-w-2xl">
            Guías detalladas sin tecnicismos. Te explicamos qué significa cada especificación
            y cuál elegir según tu caso concreto.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all group"
            >
              <div>
                <h2 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {g.title}
                </h2>
                <span className="text-xs text-gray-400 mt-1 block">⏱ {g.readTime}</span>
              </div>
              <span className="text-gray-500 group-hover:text-gray-800 font-semibold text-sm whitespace-nowrap ml-4">
                Leer →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
