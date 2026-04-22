import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taladros para piso pequeño — Los mejores de 2025",
  description:
    "Comparativa y análisis de los mejores taladros percutores y atornilladores compactos para pisos pequeños. Guías actualizadas con precios reales.",
  openGraph: {
    title: "Mejores taladros para piso pequeño 2025 | BricoCompacto",
    description: "Análisis honestos de taladros compactos para reformas en piso.",
  },
};

const articles = [
  {
    title: "Mejor taladro percutor para piso pequeño 2025",
    desc: "Analizamos 8 modelos. El Bosch PSB 1800 LI-2 se lleva la palma por autonomía y tamaño. Te contamos cuáles descartamos y por qué.",
    href: "/taladros/mejor-taladro-percutor-piso-pequeno/",
    badge: "Más leído",
    readTime: "8 min",
  },
  {
    title: "Mejor atornillador a batería para principiantes 2025",
    desc: "Si solo necesitas montar muebles de IKEA y colgar cuadros, no necesitas un taladro completo. Estos 5 atornilladores son perfectos.",
    href: "/taladros/mejor-atornillador-bateria-principiantes/",
    readTime: "6 min",
  },
  {
    title: "Taladro sin cable vs con cable — ¿Cuál comprar?",
    desc: "La respuesta cambia según lo que vayas a hacer. Te explicamos en qué casos merece la pena cada tipo con ejemplos reales.",
    href: "/taladros/taladro-sin-cable-vs-con-cable/",
    readTime: "5 min",
  },
  {
    title: "Guía de brocas: qué broca usar en cada superficie",
    desc: "Pared de ladrillo, hormigón, azulejo, madera, metal. Tabla completa con tipos de broca, velocidad y consejo para no partir el azulejo.",
    href: "/taladros/guia-brocas-superficies/",
    readTime: "7 min",
  },
];

export default function TaladrosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Taladros para piso pequeño",
    description: "Análisis y comparativas de taladros compactos",
    url: "https://DarioSanchez99.github.io/bricocompacto/taladros/",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://DarioSanchez99.github.io/bricocompacto/" },
        { "@type": "ListItem", position: 2, name: "Taladros", item: "https://DarioSanchez99.github.io/bricocompacto/taladros/" },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-200 mb-3">
            <Link href="/" className="hover:text-white">Inicio</Link> › Taladros
          </nav>
          <h1 className="text-3xl font-bold mb-2">🔩 Taladros para piso pequeño</h1>
          <p className="text-blue-100 max-w-2xl">
            Guías actualizadas mensualmente. Taladros percutores, atornilladores y accesorios
            seleccionados para reformas en pisos pequeños.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-5">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {a.badge && (
                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      {a.badge}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">⏱ {a.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-lg leading-snug">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
              </div>
              <span className="text-blue-600 font-semibold text-sm whitespace-nowrap self-center">
                Leer análisis →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
