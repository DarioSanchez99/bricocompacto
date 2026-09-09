import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guías de compra — BricoCompacto",
  description:
    "Guías de compra detalladas para elegir la herramienta perfecta según tu presupuesto y necesidades. Sin tecnicismos, con recomendaciones concretas.",
};

const TAG = "bricocompacto-21";

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

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">

        {/* Guide 1: Aspiradores sin cable */}
        <article id="aspirador-sin-cable" className="scroll-mt-20">
          <header className="mb-6">
            <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
              Aspiradores
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2 leading-tight">
              Cómo elegir un aspirador sin cable para piso pequeño
            </h2>
            <p className="text-gray-500 text-sm">⏱ 8 min de lectura · Actualizado: septiembre 2025</p>
          </header>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">Lo que nadie te dice en la tienda</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              La mayoría de guías te hablan de vatios y pascales. Pero en un piso de 50m², lo que
              importa es si el aspirador va a seguir en el armario o lo vas a usar tres veces por semana.
              Eso depende del peso, la autonomía y lo fácil que es vaciarlo. No de los vatios.
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Las 5 especificaciones que realmente importan
          </h3>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">1. Autonomía (minutos de uso real)</h4>
              <p className="text-sm text-gray-700">
                Un piso de 50m² requiere entre 15 y 25 minutos de aspirado real. La autonomía que anuncia el
                fabricante suele medirse en modo ECO (baja potencia). En modo normal, divide por 1,5. Si el
                fabricante dice 60 min en modo ECO, espera 30-40 min en uso real. Para piso pequeño, con
                <strong> 25-35 minutos reales</strong> es suficiente.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">2. Peso (kg en mano)</h4>
              <p className="text-sm text-gray-700">
                El peso que importa es el que sujetas cuando aspiras el techo o las estanterías altas, no el
                peso total del aparato. Busca modelos de <strong>2,5 kg o menos</strong>. Por encima de 3 kg,
                el brazo cansa a los 10 minutos y el aspirador acaba en el armario.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">3. Filtro HEPA (si hay alérgicos)</h4>
              <p className="text-sm text-gray-700">
                Solo importa si alguien en casa tiene alergia al polvo, ácaros o pelo de mascota. Un filtro
                HEPA H13 retiene el 99,97% de partículas de 0,3 micras. Los filtros &quot;tipo HEPA&quot; o
                &quot;HEPA-like&quot; no garantizan esa eficiencia. Si hay alérgicos, busca específicamente
                <strong> HEPA H12 o H13 certificado</strong>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">4. Capacidad del depósito (litros)</h4>
              <p className="text-sm text-gray-700">
                Para pisos pequeños sin mascotas, <strong>0,4-0,6 L es suficiente</strong> para una semana
                de uso. Si tienes perro o gato, busca 0,7 L o más, o tendrás que vaciarlo a mitad de sesión.
                Los depósitos pequeños también se atascan más fácilmente con pelo largo.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">5. Batería extraíble vs integrada</h4>
              <p className="text-sm text-gray-700">
                La batería extraíble te permite comprar un repuesto cuando la original pierda capacidad (2-4
                años de uso). Las baterías integradas convierten el aspirador en residuo cuando se degrada.
                Si vas a usar el aspirador más de 3 veces por semana,
                <strong> la batería extraíble vale el sobreprecio</strong>.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">¿Cuánto debes gastarte?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
              <p className="font-bold text-gray-900 mb-1">Menos de 100€</p>
              <p className="text-gray-700">
                Xiaomi G10 Plus. HEPA incluido, funciona. Para uso 1-2 veces/semana en piso sin mascotas.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
              <p className="font-bold text-gray-900 mb-1">100€ — 200€</p>
              <p className="text-gray-700">
                Rowenta Air Force o Hoover HF500. El punto dulce: más autonomía, mejor construcción, filtros
                de calidad.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
              <p className="font-bold text-gray-900 mb-1">Más de 200€</p>
              <p className="text-gray-700">
                Dyson V8/V10. Solo si tienes mascotas, alérgicos en casa o lo usas a diario. El extra se
                amortiza.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/aspiradores/"
              className="inline-block bg-purple-700 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-purple-800 transition-colors text-sm"
            >
              Ver comparativa completa de aspiradores →
            </Link>
          </div>
        </article>

        <hr className="border-gray-200" />

        {/* Guide 2: Herramientas de jardín para balcón mini */}
        <article id="herramientas-balcon-mini" className="scroll-mt-20">
          <header className="mb-6">
            <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded">
              Jardín
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2 leading-tight">
              Las mejores herramientas para un balcón mini
            </h2>
            <p className="text-gray-500 text-sm">⏱ 7 min de lectura · Actualizado: septiembre 2025</p>
          </header>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">El problema de las herramientas de jardín convencionales</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Una azada de 1,5 metros no cabe en el armario de un piso. Un carretillo tampoco. Pero para
              cultivar en macetas y jardineras de balcón no los necesitas. Con 5 herramientas del tamaño
              correcto puedes hacer todo lo que necesitas en un balcón de hasta 10m².
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Las 5 herramientas que sí necesitas (y las que no)
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Herramienta</th>
                  <th className="text-center p-3 font-semibold text-gray-700">¿Necesaria?</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Para qué sirve</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 bg-green-50">
                  <td className="p-3 font-medium">Transplantador de mano</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-gray-600">Mover plantas entre macetas, plantar bulbos</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Rastrillo de 3 dientes</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-gray-600">Airear la tierra de macetas compactada</td>
                </tr>
                <tr className="border-t border-gray-100 bg-green-50">
                  <td className="p-3 font-medium">Tijeras de podar</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-gray-600">Cortar ramas, cosechar hierbas aromáticas</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Regadera de 1-2 L</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-gray-600">Riego de precisión sin encharcar</td>
                </tr>
                <tr className="border-t border-gray-100 bg-green-50">
                  <td className="p-3 font-medium">Guantes de jardín</td>
                  <td className="p-3 text-center">✅ Sí</td>
                  <td className="p-3 text-gray-600">Protección ante espinas y tierra</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Azada larga</td>
                  <td className="p-3 text-center">❌ No</td>
                  <td className="p-3 text-gray-600">No sirve para macetas, solo para suelo directo</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 font-medium">Carretillo</td>
                  <td className="p-3 text-center">❌ No</td>
                  <td className="p-3 text-gray-600">Sin sentido en un balcón de 6m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Qué comprar según el espacio disponible para guardar
          </h3>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">Sin espacio de almacenaje (solo el cajón de la entrada)</h4>
              <p className="text-sm text-gray-700">
                Un set de herramientas plegables como el Primestock de 5 piezas es tu única opción viable.
                Todo plegado cabe en una bolsa de 35 cm. La calidad es correcta para uso en macetas, aunque
                los mangos son algo cortos.{" "}
                <a
                  href={`https://www.amazon.es/dp/B07TPTZXT5?tag=${TAG}`}
                  className="text-green-700 underline font-medium"
                  target="_blank"
                  rel="nofollow noopener sponsored"
                >
                  Ver en Amazon (~28€)
                </a>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">Con hueco en el armario (30 × 60 cm libre)</h4>
              <p className="text-sm text-gray-700">
                Puedes permitirte herramientas de mango fijo, que dan más control. Busca un set básico de
                Fiskars o Gardena: materiales de calidad profesional a precios asequibles (30-50€). Añade una
                regadera aparte y tendrás todo lo necesario para un balcón de hasta 12m².
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-1">Con terraza y trastero o armario de exterior</h4>
              <p className="text-sm text-gray-700">
                Si tienes donde guardar, invierte en herramientas de calidad. Las marcas Fiskars, Burgon &amp;
                Ball o Sneeboer duran 10-20 años. El coste por uso real es menor que comprar un set barato cada
                dos temporadas.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            El kit de riego: lo que más ahorra tiempo
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Si tienes más de 5 macetas, un sistema de riego por goteo es lo mejor que puedes comprar
            para el balcón. No por comodidad, sino por coherencia: la mayoría de plantas mueren por
            riego irregular, no por falta de agua. Con el kit Gardena Micro-Drip cada planta recibe
            exactamente lo que necesita, todos los días, sin que tengas que recordarlo.
          </p>
          <p className="text-gray-700 text-sm mb-6">
            Con el temporizador (otros 20-25€), también puedes irte de vacaciones sin preocuparte.
            El sistema completo cuesta menos de 60€ y dura más de 5 años.
          </p>

          <div className="flex gap-3">
            <Link
              href="/jardin/"
              className="inline-block bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors text-sm"
            >
              Ver todos los productos de jardín →
            </Link>
          </div>
        </article>

        <hr className="border-gray-200" />

        {/* Index of other guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Más guías de compra</h2>
          <div className="space-y-4">
            {[
              { title: "Cómo elegir un taladro — Guía completa para principiantes", href: "/guias/como-elegir-taladro/", readTime: "10 min" },
              { title: "Guía de aspiradores: qué significa cada especificación", href: "/guias/guia-aspiradores-especificaciones/", readTime: "9 min" },
              { title: "Bricolaje básico en piso: las 10 herramientas mínimas", href: "/guias/bricolaje-basico-piso-herramientas/", readTime: "7 min" },
              { title: "Cómo colgar cuadros y estanterías sin dañar la pared", href: "/guias/colgar-cuadros-estanterias-piso/", readTime: "6 min" },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {g.title}
                  </h3>
                  <span className="text-xs text-gray-400 mt-1 block">⏱ {g.readTime}</span>
                </div>
                <span className="text-gray-500 group-hover:text-gray-800 font-semibold text-sm whitespace-nowrap ml-4">
                  Leer →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
