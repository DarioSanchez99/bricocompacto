import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organización y almacenaje para piso pequeño — Guías 2025",
  description:
    "Las mejores soluciones de almacenaje y organización para pisos pequeños. Escaleras plegables, organizadores de armario, sistemas de estanterías y más.",
};

const articles = [
  {
    title: "Mejores escaleras plegables para piso pequeño 2025",
    desc: "Analizamos 6 escaleras que se guardan en un armario. La diferencia entre una de 30€ y una de 90€ es mayor de lo que parece.",
    href: "/organizacion/mejores-escaleras-plegables/",
    badge: "Más leído",
    readTime: "7 min",
  },
  {
    title: "Sistemas de estantería KALLAX vs PAX — ¿Cuál comprar en piso pequeño?",
    desc: "No todas las estanterías de IKEA aprovechan igual el espacio. Te decimos cuál instalar según tu pared disponible.",
    href: "/organizacion/kallax-vs-pax-piso-pequeno/",
    readTime: "8 min",
  },
  {
    title: "Guía: organizar armario pequeño con 100€ o menos",
    desc: "Plan de organización paso a paso con productos concretos de Amazon. Dividimos el presupuesto para que nada sobre.",
    href: "/organizacion/organizar-armario-pequeno-100-euros/",
    readTime: "10 min",
  },
];

export default function OrganizacionPage() {
  return (
    <>
      <div className="bg-orange-600 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-orange-200 mb-3">
            <Link href="/" className="hover:text-white">Inicio</Link> › Organización
          </nav>
          <h1 className="text-3xl font-bold mb-2">📦 Organización y almacenaje</h1>
          <p className="text-orange-100 max-w-2xl">
            Soluciones reales para sacar el máximo partido a cada metro cuadrado.
            Escaleras, estanterías, organizadores y sistemas de almacenaje testados.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-5">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {a.badge && (
                    <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                      {a.badge}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">⏱ {a.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 group-hover:text-orange-700 transition-colors text-lg leading-snug">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
              </div>
              <span className="text-orange-600 font-semibold text-sm whitespace-nowrap self-center">
                Leer análisis →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
