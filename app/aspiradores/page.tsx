import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aspiradores sin cable para piso pequeño — Comparativa 2025",
  description:
    "Los mejores aspiradores sin cable para pisos pequeños. Analizamos potencia de succión, peso, autonomía y filtro HEPA. Guías actualizadas.",
  openGraph: {
    title: "Mejores aspiradores sin cable 2025 | BricoCompacto",
    description: "Comparativa honesta de aspiradores para pisos pequeños.",
  },
};

const articles = [
  {
    title: "Mejor aspirador sin cable para piso pequeño 2025",
    desc: "Comparamos 7 modelos en piso de 45m². El Xiaomi G10 Plus supera al Dyson V8 en precio. Te decimos cuándo vale la pena pagar más.",
    href: "/aspiradores/mejor-aspirador-sin-cable-piso-pequeno/",
    badge: "Más leído",
    readTime: "10 min",
  },
  {
    title: "Aspirador robot vs sin cable — ¿Cuál necesitas?",
    desc: "Para pisos pequeños con muebles bajos, un robot puede no ser la mejor opción. Analizamos los 4 factores clave para decidir.",
    href: "/aspiradores/robot-vs-sin-cable/",
    readTime: "6 min",
  },
  {
    title: "Mejores aspiradores con filtro HEPA alérgicos 2025",
    desc: "Si tienes alergia al polvo o a los ácaros, el filtro HEPA es innegociable. Estos 4 modelos lo tienen de verdad (no solo lo dicen).",
    href: "/aspiradores/aspirador-filtro-hepa-alergicos/",
    readTime: "8 min",
  },
];

export default function AspiradoresPage() {
  return (
    <>
      <div className="bg-purple-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-purple-200 mb-3">
            <Link href="/" className="hover:text-white">Inicio</Link> › Aspiradores
          </nav>
          <h1 className="text-3xl font-bold mb-2">🌀 Aspiradores sin cable</h1>
          <p className="text-purple-100 max-w-2xl">
            Comparativas actualizadas de aspiradores para pisos pequeños. Potencia real,
            autonomía comprobada y filtro HEPA verificado.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-5">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {a.badge && (
                    <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                      {a.badge}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">⏱ {a.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-lg leading-snug">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
              </div>
              <span className="text-purple-600 font-semibold text-sm whitespace-nowrap self-center">
                Leer análisis →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
