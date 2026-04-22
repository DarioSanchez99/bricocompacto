import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-3">🔧 BricoCompacto</h3>
          <p className="text-sm leading-relaxed">
            Guías de compra y análisis honestos de herramientas, aspiradores y
            soluciones de jardín para pisos pequeños.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Categorías</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/taladros/" className="hover:text-white transition-colors">Taladros y atornilladores</Link></li>
            <li><Link href="/aspiradores/" className="hover:text-white transition-colors">Aspiradores sin cable</Link></li>
            <li><Link href="/jardin/" className="hover:text-white transition-colors">Jardín en terraza</Link></li>
            <li><Link href="/organizacion/" className="hover:text-white transition-colors">Organización y almacenaje</Link></li>
            <li><Link href="/guias/" className="hover:text-white transition-colors">Guías de compra</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/aviso-legal/" className="hover:text-white transition-colors">Aviso legal</Link></li>
            <li><Link href="/politica-privacidad/" className="hover:text-white transition-colors">Política de privacidad</Link></li>
            <li><Link href="/cookies/" className="hover:text-white transition-colors">Política de cookies</Link></li>
            <li><Link href="/sobre-nosotros/" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-xs text-gray-500 py-3 px-4">
        © {new Date().getFullYear()} BricoCompacto. Participante en el Programa de Afiliados de Amazon EU.
      </div>
    </footer>
  );
}
