import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BricoCompacto — Herramientas y jardín para pisos pequeños",
  description:
    "Guías de compra y análisis honestos de taladros, aspiradores sin cable y soluciones de jardín para pisos pequeños. Encuentra el mejor producto para tu espacio.",
  openGraph: {
    title: "BricoCompacto — Herramientas y jardín para pisos pequeños",
    description: "Guías de compra y análisis honestos para espacios reducidos.",
    url: "https://DarioSanchez99.github.io/bricocompacto/",
  },
};

const silos = [
  {
    title: "Taladros y atornilladores",
    desc: "Los mejores taladros compactos para instalar estanterías, colgar cuadros y hacer pequeñas reformas en piso.",
    href: "/taladros/",
    icon: "🔩",
    color: "border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-50",
  },
  {
    title: "Aspiradores sin cable",
    desc: "Aspiradores ligeros y potentes para pisos pequeños. Sin cables, sin ruido excesivo, con filtro HEPA.",
    href: "/aspiradores/",
    icon: "🌀",
    color: "border-purple-200 hover:border-purple-400",
    iconBg: "bg-purple-50",
  },
  {
    title: "Jardín en terraza",
    desc: "Herramientas de jardín compactas, macetas inteligentes y riego automático para balcones y terrazas.",
    href: "/jardin/",
    icon: "🌿",
    color: "border-green-200 hover:border-green-400",
    iconBg: "bg-green-50",
  },
  {
    title: "Organización y almacenaje",
    desc: "Soluciones de almacenaje para aprovechar cada centímetro: escaleras, organizadores y cajas.",
    href: "/organizacion/",
    icon: "📦",
    color: "border-orange-200 hover:border-orange-400",
    iconBg: "bg-orange-50",
  },
];

const featuredArticles = [
  {
    title: "Mejor taladro percutor para piso pequeño 2025",
    desc: "Analizamos 8 taladros compactos. El ganador sorprende por su relación calidad-precio.",
    href: "/taladros/mejor-taladro-percutor-piso-pequeno/",
    category: "Taladros",
    readTime: "8 min",
  },
  {
    title: "Mejor aspirador sin cable para piso pequeño 2025",
    desc: "Comparativa de 7 aspiradores. El Dyson no siempre gana. Te explicamos cuál comprar.",
    href: "/aspiradores/mejor-aspirador-sin-cable-piso-pequeno/",
    category: "Aspiradores",
    readTime: "10 min",
  },
  {
    title: "Guía: cómo montar un jardín en 6m² de terraza",
    desc: "Paso a paso para crear un jardín productivo en una terraza de piso con poco presupuesto.",
    href: "/jardin/jardin-terraza-6-metros/",
    category: "Jardín",
    readTime: "12 min",
  },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BricoCompacto",
    url: "https://DarioSanchez99.github.io/bricocompacto/",
    description:
      "Guías de compra y análisis de herramientas y jardín para pisos pequeños",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Las mejores herramientas para{" "}
            <span className="text-yellow-300">pisos pequeños</span>
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Análisis honestos y guías de compra de taladros, aspiradores y jardín.
            Sin publicidad engañosa. Solo lo que funciona de verdad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/guias/"
              className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Ver guías de compra
            </Link>
            <Link
              href="/taladros/"
              className="bg-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-colors border border-white/40"
            >
              Explorar taladros
            </Link>
          </div>
        </div>
      </section>

      {/* Silos */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Encuentra lo que necesitas
        </h2>
        <p className="text-gray-600 mb-8">
          Organizados por categoría para que localices el análisis que buscas en segundos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {silos.map((silo) => (
            <Link
              key={silo.href}
              href={silo.href}
              className={`flex gap-4 p-5 bg-white rounded-xl border-2 transition-all group ${silo.color}`}
            >
              <div
                className={`w-12 h-12 rounded-lg ${silo.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}
              >
                {silo.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                  {silo.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{silo.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Análisis más leídos
          </h2>
          <p className="text-gray-600 mb-8">
            Actualizados mensualmente con los precios y modelos más recientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-5 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group bg-white"
              >
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                  {a.category}
                </span>
                <h3 className="font-bold text-gray-900 mt-3 mb-2 group-hover:text-green-800 transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{a.desc}</p>
                <span className="text-xs text-gray-400">
                  ⏱ {a.readTime} de lectura
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-5 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-bold text-gray-900 mb-1">
              Análisis independientes
            </h3>
            <p className="text-sm text-gray-600">
              No recibimos productos gratis. Compramos y probamos.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-bold text-gray-900 mb-1">
              Actualizados mensualmente
            </h3>
            <p className="text-sm text-gray-600">
              Revisamos precios y añadimos nuevos modelos cada mes.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-gray-900 mb-1">Sin letra pequeña</h3>
            <p className="text-sm text-gray-600">
              Pros y contras reales. Si un producto falla, lo decimos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
