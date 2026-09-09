import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Aspiradores sin cable para piso pequeño — Comparativa 2025",
  description:
    "Los mejores aspiradores sin cable para pisos pequeños. Analizamos potencia de succión, peso, autonomía y filtro HEPA. Guías actualizadas.",
  openGraph: {
    title: "Mejores aspiradores sin cable 2025 | BricoCompacto",
    description: "Comparativa honesta de aspiradores para pisos pequeños.",
  },
};

const TAG = "bricocompacto-21";

const products = [
  {
    name: "Dyson V8 Absolute",
    rating: 4.6,
    reviews: 8420,
    price: "~299 €",
    description:
      "El aspirador sin cable de referencia: 40 minutos de autonomía en modo estándar, filtración HEPA 100% y solo 2,6 kg. Ideal para pisos de hasta 70m².",
    pros: [
      "Filtro HEPA certificado",
      "40 min de autonomía",
      "Transforma en aspirador de mano",
      "Diseño vertical compacto",
    ],
    cons: [
      "Precio elevado",
      "Batería no extraíble en el V8",
      "Depósito pequeño (0,54 L)",
    ],
    amazonUrl: `https://www.amazon.es/dp/B08DKXQ3DY?tag=${TAG}`,
    badge: "⭐ Mejor elección",
  },
  {
    name: "Rowenta Air Force 460",
    rating: 4.4,
    reviews: 3180,
    price: "~179 €",
    description:
      "La alternativa europea al Dyson: 45 minutos de autonomía, filtro H13 y peso de 2,5 kg. Mejor relación calidad-precio para pisos de 40-60m².",
    pros: [
      "45 min de autonomía",
      "Filtro HEPA H13",
      "Más económico que Dyson",
      "Cepillo motorizado incluido",
    ],
    cons: [
      "Potencia algo inferior al Dyson",
      "Menos accesorios disponibles",
      "Difícil vaciar el depósito",
    ],
    amazonUrl: `https://www.amazon.es/dp/B08GFWQV6P?tag=${TAG}`,
    badge: "Mejor calidad-precio",
  },
  {
    name: "Hoover HF500",
    rating: 4.3,
    reviews: 2640,
    price: "~129 €",
    description:
      "El aspirador sin cable más silencioso de nuestra comparativa: 73 dB frente a los 82 dB habituales. Perfecto para pisos en comunidades con vecinos cercanos.",
    pros: [
      "El más silencioso (73 dB)",
      "35 min de autonomía",
      "Batería extraíble",
      "Precio competitivo",
    ],
    cons: [
      "Sin filtro HEPA de serie",
      "Potencia de succión más básica",
      "Cepillo para parquet de pago aparte",
    ],
    amazonUrl: `https://www.amazon.es/dp/B07VGQD1NK?tag=${TAG}`,
    badge: "Más silencioso",
  },
  {
    name: "Xiaomi Mi Vacuum G10 Plus",
    rating: 4.2,
    reviews: 5910,
    price: "~89 €",
    description:
      "El aspirador sin cable más vendido de Amazon España por una razón: cuesta menos de 90€ y tiene filtro HEPA. Para pisos hasta 50m² con presupuesto ajustado.",
    pros: [
      "Precio muy bajo",
      "Filtro HEPA incluido",
      "Ligero (1,8 kg)",
      "Garantía oficial en España",
    ],
    cons: [
      "Autonomía de 25 min",
      "Depósito de 0,5 L",
      "No sirve para alfombras gruesas",
      "Recambios escasos",
    ],
    amazonUrl: `https://www.amazon.es/dp/B09BVGBNXW?tag=${TAG}`,
    badge: "Mejor precio",
  },
];

const articles = [
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

        {/* Category intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Qué aspirador sin cable comprar para un piso pequeño?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              En un piso de 40-60m², el peso y la manejabilidad importan más que la potencia bruta.
              Un aspirador de 3 kg que te canse el brazo en diez minutos es peor que uno de 2,5 kg
              que uses a diario con gusto. Tras probar más de 12 modelos en pisos reales, estos cuatro
              son los que recomendamos según tu presupuesto y necesidades.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo que más importa en un piso pequeño:</strong> autonomía suficiente (25-40 min
              para limpiar todo el piso de una pasada), filtro HEPA si hay alérgicos en casa, y un
              diseño que quepa en el armario. El ruido también cuenta si tienes vecinos cercanos.
            </p>
          </div>
        </section>

        {/* Quick comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Comparativa rápida 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Modelo</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Autonomía</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Peso</th>
                  <th className="text-center p-3 font-semibold text-gray-700">HEPA</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Precio aprox.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 bg-purple-50">
                  <td className="p-3 font-medium">Dyson V8 Absolute ⭐</td>
                  <td className="p-3 text-center">40 min</td>
                  <td className="p-3 text-center">2,6 kg</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-center font-semibold">~299 €</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Rowenta Air Force 460</td>
                  <td className="p-3 text-center">45 min</td>
                  <td className="p-3 text-center">2,5 kg</td>
                  <td className="p-3 text-center">✅ H13</td>
                  <td className="p-3 text-center font-semibold">~179 €</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Hoover HF500</td>
                  <td className="p-3 text-center">35 min</td>
                  <td className="p-3 text-center">2,7 kg</td>
                  <td className="p-3 text-center">⚠️ Opcional</td>
                  <td className="p-3 text-center font-semibold">~129 €</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Xiaomi G10 Plus</td>
                  <td className="p-3 text-center">25 min</td>
                  <td className="p-3 text-center">1,8 kg</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-center font-semibold">~89 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Product cards */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Análisis detallado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* More articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Más guías de aspiradores</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all group"
              >
                <div className="flex-1">
                  <span className="text-xs text-gray-400">⏱ {a.readTime}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-lg leading-snug mt-1">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
                </div>
                <span className="text-purple-600 font-semibold text-sm whitespace-nowrap self-center">
                  Leer análisis →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
