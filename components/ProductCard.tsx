interface ProductCardProps {
  name: string;
  image?: string;
  description?: string;
  price: string;
  rating: number;
  reviews?: number;
  amazonUrl: string;
  tag?: string;
  pros?: string[];
  cons?: string[];
  badge?: string;
}

export default function ProductCard({
  name,
  image,
  description,
  price,
  rating,
  reviews,
  amazonUrl,
  tag,
  pros,
  cons,
  badge,
}: ProductCardProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars =
    "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(5 - fullStars - (halfStar ? 1 : 0));

  const affiliateUrl = tag
    ? `${amazonUrl}${amazonUrl.includes("?") ? "&" : "?"}tag=${tag}`
    : amazonUrl;

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {image && (
        <div className="bg-gray-50 flex items-center justify-center h-48 border-b border-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="max-h-44 max-w-full object-contain p-4"
          />
        </div>
      )}

      <div className="p-5">
        {badge && (
          <span className="inline-block bg-green-700 text-white text-xs font-bold px-2 py-0.5 rounded mb-3">
            {badge}
          </span>
        )}
        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">{name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500 text-sm tracking-tight">{stars}</span>
          <span className="text-sm text-gray-600">
            {rating}/5
            {reviews !== undefined && (
              <> ({reviews.toLocaleString("es-ES")} valoraciones)</>
            )}
          </span>
        </div>

        {description && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
        )}

        {(pros || cons) && (
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
            {pros && (
              <div>
                <p className="font-semibold text-green-800 mb-1">✓ Pros</p>
                <ul className="space-y-0.5 text-gray-700">
                  {pros.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            )}
            {cons && (
              <div>
                <p className="font-semibold text-red-700 mb-1">✗ Contras</p>
                <ul className="space-y-0.5 text-gray-700">
                  {cons.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <a
            href={affiliateUrl}
            className="amazon-btn text-sm"
            target="_blank"
            rel="nofollow noopener sponsored"
          >
            Ver en Amazon
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-right">
          * Como asociado de Amazon obtenemos comisión por compras.
        </p>
      </div>
    </div>
  );
}
