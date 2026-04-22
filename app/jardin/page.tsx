import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jardín en terraza y balcón — Guías para espacios pequeños 2025",
  description:
    "Cómo crear un jardín en balcón o terraza pequeña. Macetas, herramientas de jardín compactas, riego automático y plantas para espacios reducidos.",
};

const articles = [
  {
    title: "Cómo montar un jardín en 6m² de terraza — Guía completa",
    desc: "Paso a paso para crear un jardín productivo en una terraza pequeña. Qué plantar, cómo regar y qué herramientas necesitas realmente.",
    href: "/jardin/jardin-terraza-6-metros/",
    badge: "Guía completa",
    readTime: "12 min",
  },
  {
    title: "Mejores macetas autorriego para balcón pequeño 2025",
    desc: "Si te olvidas de regar o te vas de vacaciones, las macetas de autorriego son la solución. Probamos 5 modelos durante 3 meses.",
    href: "/jardin/macetas-autorriego-balcon/",
    readTime: "7 min",
  },
  {
    title: "Herramientas de jardín compactas para terraza — Las 6 imprescindibles",
    desc: "No necesitas un cobertizo lleno de herramientas. Estos 6 utensilios te sirven para todo lo que vas a hacer en una terraza.",
    href: "/jardin/herramientas-jardin-compactas-terraza/",
    readTime: "6 min",
  },
];

export default function JardinPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-200 mb-3">
            <Link href="/" className="hover:text-white">Inicio</Link> › Jardín
          </nav>
          <h1 className="text-3xl font-bold mb-2">🌿 Jardín en terraza y balcón</h1>
          <p className="text-green-100 max-w-2xl">
            Guías prácticas para crear y mantener un jardín en espacios pequeños.
            Macetas, herramientas y plantas que funcionan de verdad.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-5">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {a.badge && (
                    <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      {a.badge}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">⏱ {a.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-lg leading-snug">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
              </div>
              <span className="text-green-600 font-semibold text-sm whitespace-nowrap self-center">
                Leer análisis →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
