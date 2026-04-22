interface ProductCardProps {
  name: string;
  rating: number;
  reviews: number;
  price: string;
  pros: string[];
  cons: string[];
  amazonUrl: string;
  badge?: string;
}

export default function ProductCard({
  name,
  rating,
  reviews,
  price,
  pros,
  cons,
  amazonUrl,
  badge,
}: ProductCardProps) {
  const stars = "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
      {badge && (
        <span className="inline-block bg-green-700 text-white text-xs font-bold px-2 py-0.5 rounded mb-3">
          {badge}
        </span>
      )}
      <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">{name}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-yellow-500 text-sm">{stars}</span>
        <span className="text-sm text-gray-600">{rating}/5 ({reviews.toLocaleString("es-ES")} valoraciones)</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div>
          <p className="font-semibold text-green-800 mb-1">✓ Pros</p>
          <ul className="space-y-0.5 text-gray-700">
            {pros.map((p) => <li key={p}>• {p}</li>)}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-red-700 mb-1">✗ Contras</p>
          <ul className="space-y-0.5 text-gray-700">
            {cons.map((c) => <li key={c}>• {c}</li>)}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">{price}</span>
        <a href={amazonUrl} className="amazon-btn text-sm" target="_blank" rel="nofollow noopener sponsored">
          Ver precio en Amazon
        </a>
      </div>
    </div>
  );
}
