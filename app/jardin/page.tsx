import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Jardín en terraza y balcón — Guías para espacios pequeños 2025",
  description:
    "Cómo crear un jardín en balcón o terraza pequeña. Macetas, herramientas de jardín compactas, riego automático y plantas para espacios reducidos.",
};

const TAG = "bricocompacto-21";

const products = [
  {
    name: "Jardinera elevada de madera de pino Outsunny",
    rating: 4.4,
    reviews: 1870,
    price: "~59 €",
    description:
      "Mesa de cultivo de madera de pino tratada, 100 × 50 × 80 cm. El tamaño ideal para un balcón de 4-6m²: puedes cultivar tomates cherry, lechugas, hierbas aromáticas y hasta pimientos sin agacharte.",
    pros: [
      "Sin necesidad de agacharse",
      "Madera tratada para exterior",
      "Fácil montaje (30 min)",
      "Apta para plantas comestibles",
    ],
    cons: [
      "Requiere riego más frecuente que en suelo",
      "Peso elevado una vez llena de tierra",
      "No viene con sustrato incluido",
    ],
    amazonUrl: `https://www.amazon.es/dp/B08R7KXTNM?tag=${TAG}`,
    badge: "⭐ Más popular",
  },
  {
    name: "Kit de riego por goteo Gardena Micro-Drip Starter Set",
    rating: 4.5,
    reviews: 3240,
    price: "~34 €",
    description:
      "Sistema de riego automático por goteo para hasta 20 macetas. Se conecta a cualquier grifo estándar y funciona con o sin temporizador (el temporizador se vende aparte). Perfecto para irse de vacaciones sin morir de angustia.",
    pros: [
      "Ahorra hasta 70% de agua",
      "Compatible con cualquier grifo",
      "Extensible con piezas adicionales",
      "Sin herramientas — montaje tipo Lego",
    ],
    cons: [
      "Temporizador no incluido (20€ extra)",
      "Tubos visibles (poco estético)",
      "Presión mínima 1 bar recomendada",
    ],
    amazonUrl: `https://www.amazon.es/dp/B000FGPAQK?tag=${TAG}`,
    badge: "Mejor funcionalidad",
  },
  {
    name: "Set de herramientas de jardín plegables Primestock (5 piezas)",
    rating: 4.3,
    reviews: 2110,
    price: "~28 €",
    description:
      "Juego de 5 herramientas de jardín con mangos plegables: transplantador, rastrillo, pala, cultivador y desyerbador. Todo cabe en una funda de lona de 35 cm. La solución para el balconero que no tiene dónde guardar nada.",
    pros: [
      "Plegables: caben en cualquier armario",
      "Acero inoxidable resistente",
      "Funda de transporte incluida",
      "Peso total: 800 g",
    ],
    cons: [
      "Mango corto (incómodo de pie)",
      "Para uso en macetas, no suelo duro",
      "No incluye guantes",
    ],
    amazonUrl: `https://www.amazon.es/dp/B07TPTZXT5?tag=${TAG}`,
    badge: "Mejor para guardar",
  },
];

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

        {/* Category intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Jardinería de balcón: qué necesitas realmente
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              Un balcón de 4m² puede producir tomates cherry, hierbas aromáticas y lechugas durante
              todo el año si tienes los tres elementos básicos: algo donde plantar, algún sistema de riego
              y las herramientas adecuadas para el espacio reducido. Sin más.
            </p>
            <p className="text-gray-700 mb-4">
              El error más común es comprar herramientas de jardín convencionales que no caben
              en un armario de piso. Aquí te mostramos alternativas compactas que funcionan igual de bien
              y desaparecen cuando no las usas.
            </p>
          </div>
        </section>

        {/* Product cards */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Los 3 productos esenciales para tu balcón
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* Tips box */}
        <section className="mb-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-green-900 mb-3">
              Consejo: empieza con esto antes de comprar nada más
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>1. Mide la luz solar de tu balcón.</strong> Si tienes menos de 4 horas de sol
                directo, olvídate de tomates y pimientos. Las aromáticas y las lechugas aguantan mejor la sombra.
              </li>
              <li>
                <strong>2. Calcula el peso máximo.</strong> La mayoría de balcones de piso soportan entre
                150-300 kg/m². Una jardinera grande llena de tierra húmeda puede pesar 80 kg. Consulta con
                tu comunidad antes de instalar nada pesado.
              </li>
              <li>
                <strong>3. Piensa en el drenaje.</strong> Las macetas sin agujero acumulan agua y pudren
                las raíces. Asegúrate de que el agua sobrante no caiga al vecino de abajo.
              </li>
            </ul>
          </div>
        </section>

        {/* More articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Guías relacionadas</h2>
          <div className="space-y-4">
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
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-lg leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
                </div>
                <span className="text-green-600 font-semibold text-sm whitespace-nowrap self-center">
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
