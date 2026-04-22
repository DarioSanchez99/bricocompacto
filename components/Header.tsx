import Link from "next/link";

const silos = [
  { label: "Taladros", href: "/taladros/" },
  { label: "Aspiradores", href: "/aspiradores/" },
  { label: "Jardín", href: "/jardin/" },
  { label: "Organización", href: "/organizacion/" },
  { label: "Guías de compra", href: "/guias/" },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-800 hover:text-green-700">
          <span>🔧</span>
          <span>BricoCompacto</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {silos.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="px-3 py-1.5 rounded text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile nav */}
      <nav className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2">
        {silos.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-200"
          >
            {s.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
