import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Organización y almacenaje para piso pequeño — Guías 2025",
  description:
    "Las mejores soluciones de almacenaje y organización para pisos pequeños. Bolsas de vacío, cajas apilables, organizadores de pared y más.",
};

const TAG = "bricocompacto-21";

const products = [
  {
    name: "Bolsas de almacenaje al vacío Space Max (pack 8 unidades)",
    rating: 4.5,
    reviews: 6730,
    price: "~22 €",
    description:
      "Pack de 8 bolsas de vacío en 4 tamaños: S, M, L y XL. Reducen el volumen de ropa y mantas hasta un 80%. Sin aspiradora especial: se cierran con la mano y basta. El truco más barato para ganar espacio en el armario.",
    pros: [
      "Reducen volumen hasta 80%",
      "Sin aspiradora especial",
      "Reutilizables (más de 20 usos)",
      "4 tamaños incluidos",
    ],
    cons: [
      "La ropa sale arrugada",
      "Hay que plegar bien antes de meter",
      "Algunas marcas pierden el vacío con el tiempo",
    ],
    amazonUrl: `https://www.amazon.es/dp/B07CFLPWP9?tag=${TAG}`,
    badge: "⭐ Más vendido",
  },
  {
    name: "Cajas de almacenaje apilables con tapa Iris Ohyama (pack 6)",
    rating: 4.4,
    reviews: 4120,
    price: "~38 €",
    description:
      "Pack de 6 cajas de plástico transparente con tapa encajable, 30 L cada una. Apilables hasta 5 alturas. Ves el contenido sin abrir. Ideales para el trastero, armario o bajo la cama.",
    pros: [
      "Apilables hasta 5 alturas",
      "Transparentes — ves el contenido",
      "Tapa encajable sin clips",
      "Resistentes y duraderas",
    ],
    cons: [
      "Peso total elevado cuando están llenas",
      "Necesitas mínimo 30 cm de alto para apilar",
      "Plástico algo rígido para doblar ropa blanda",
    ],
    amazonUrl: `https://www.amazon.es/dp/B07YF2KD5L?tag=${TAG}`,
    badge: "Mejor para apilar",
  },
  {
    name: "Organizador de pared con ganchos y bandejas Songmics",
    rating: 4.3,
    reviews: 2890,
    price: "~45 €",
    description:
      "Panel organizador metálico de rejilla (60 × 40 cm) con 8 ganchos, 2 bandejas y 2 cestas. Se fija a la pared o se apoya en cualquier superficie. Libera el cajón y el mostrador de la entrada o la cocina de un solo golpe.",
    pros: [
      "Sin perforar la pared (sistema adhesivo)",
      "Incluye ganchos, bandejas y cestas",
      "Soporta hasta 15 kg",
      "Fácil de reconfigurar",
    ],
    cons: [
      "Montaje algo laborioso",
      "Metal frío — puede desentonar en decoración cálida",
      "Instrucciones en inglés y chino",
    ],
    amazonUrl: `https://www.amazon.es/dp/B08BR9D8VZ?tag=${TAG}`,
    badge: "Mejor para paredes",
  },
];

const articles = [
  {
    title: "Mejores escaleras plegables para piso pequeño 2025",
    desc: "Analizamos 6 escaleras que se guardan en un armario. La diferencia entre una de 30€ y una de 90€ es mayor de lo que parece.",
    href: "/organizacion/mejores-escaleras-plegables/",
    badge: "Más leído",
    readTime: "7 min",
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
            Bolsas de vacío, cajas apilables y organizadores testados en piso pequeño.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Category intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cómo ganar espacio en un piso pequeño sin reformar
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              Ganar espacio en un piso de 40-60m² no requiere reformar ni tirar paredes. Requiere
              aprovechar tres recursos que casi nadie usa bien: el espacio vertical, el espacio bajo
              la cama y el volumen perdido en el armario por ropa de temporada mal guardada.
            </p>
            <p className="text-gray-700 mb-4">
              Estos tres productos representan las tres estrategias más efectivas: comprimir lo que
              ya tienes, apilar en altura y usar las paredes como almacenaje. Con menos de 110€ en total,
              puedes liberar el equivalente a un armario completo.
            </p>
          </div>
        </section>

        {/* Product cards */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Los 3 mejores productos de organización para piso pequeño
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* Strategy tips */}
        <section className="mb-12">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-orange-900 mb-4">
              La regla de los 3 niveles de almacenaje
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Nivel 1 — Suelo y bajo cama</p>
                <p>Cajas con ruedas para temporadas. Nada de cajas sin tapa abiertas que acumulan polvo.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Nivel 2 — Estantes y armario</p>
                <p>Bolsas de vacío para ropa fuera de temporada. Ganas 60% del espacio en 20 minutos.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Nivel 3 — Paredes</p>
                <p>Paneles de rejilla en entrada, cocina o baño. La pared es espacio de almacenaje gratuito.</p>
              </div>
            </div>
          </div>
        </section>

        {/* More articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Más guías de organización</h2>
          <div className="space-y-4">
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
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-700 transition-colors text-lg leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
                </div>
                <span className="text-orange-600 font-semibold text-sm whitespace-nowrap self-center">
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
