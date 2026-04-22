# BricoCompacto

Web de afiliados Amazon especializada en herramientas de bricolaje, aspiradores y jardín para pisos pequeños y espacios reducidos.

**URL:** https://dariosanchez99.github.io/bricocompacto/

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| **Next.js 16** (App Router) | Framework principal, SSG con `output: export` |
| **TypeScript** | Tipado estático en todos los componentes |
| **Tailwind CSS v4** | Estilos — sin CSS custom salvo variables y clases propias |
| **GitHub Pages** | Hosting gratuito desde rama `gh-pages` |
| **GitHub Actions** | CI/CD: build automático en cada push a `main` |
| **peaceiris/actions-gh-pages** | Deploy fiable de estáticos a `gh-pages` |

---

## Arquitectura SEO (RankMaestro)

La estructura del sitio sigue una arquitectura de **silos temáticos** diseñada para maximizar la autoridad interna por categoría y facilitar el posicionamiento en Google.

### Silos

```
bricocompacto/
├── /taladros/          ← Silo: taladros y atornilladores compactos
├── /aspiradores/       ← Silo: aspiradores sin cable para piso pequeño
├── /jardin/            ← Silo: jardín en terraza y balcón
├── /organizacion/      ← Silo: organización y almacenaje
└── /guias/             ← Guías de compra transversales
```

Cada silo agrupa artículos relacionados y enlaza internamente entre ellos, concentrando la autoridad temática en lugar de dispersarla.

### Optimizaciones SEO aplicadas

- **Schema.org** en cada página: `WebSite`, `Article`, `FAQPage`, `BreadcrumbList`, `CollectionPage`
- **Metadata completa** por ruta: `title`, `description`, `canonical`, `openGraph`
- **Estructura H1 → H2 → H3** correcta en artículos
- **URLs limpias** con keyword principal: `/taladros/mejor-taladro-percutor-piso-pequeno/`
- **`trailingSlash: true`** para URLs consistentes y sin redirecciones
- **`sitemap.xml`** y **`robots.txt`** estáticos en `/public`
- **Aviso de afiliado Amazon** visible en todas las páginas (requisito ToS Associates)
- **Intención transaccional y comercial** en los artículos: comparativas, reviews, guías de compra
- **Enlazado interno** entre artículos del mismo silo y hacia artículos relacionados

### Estructura de artículo (review)

Los artículos de análisis de producto siguen la estructura validada de mayor conversión:

1. **Hook de apertura** — Problema que resuelve el artículo
2. **Resumen rápido** — Los 3 ganadores por categoría (mejor elección, calidad, precio)
3. **Tabla comparativa** — Datos clave en formato escaneable
4. **Análisis detallado** — Pros, contras, puntuación por modelo
5. **Cuándo necesitas X** — Educa al usuario y reduce el bounce
6. **¿Cuál comprar según tu caso?** — Guía de decisión personalizada
7. **FAQ** — Schema FAQPage para rich snippets en Google
8. **Artículos relacionados** — Enlazado interno al silo

---

## Estructura del proyecto

```
app/
├── layout.tsx                          ← Layout global + aviso afiliado
├── page.tsx                            ← Home: hero + silos + artículos destacados
├── taladros/
│   ├── page.tsx                        ← Índice del silo
│   └── mejor-taladro-percutor-piso-pequeno/
│       └── page.tsx                    ← Artículo completo con schema.org
├── aspiradores/page.tsx
├── jardin/page.tsx
├── organizacion/page.tsx
└── guias/page.tsx

components/
├── Header.tsx                          ← Navegación sticky con los 5 silos
├── Footer.tsx                          ← Footer con categorías + aviso legal
└── ProductCard.tsx                     ← Card de producto con CTA Amazon

public/
├── sitemap.xml
├── robots.txt
└── .nojekyll                           ← Impide que Jekyll bloquee _next/static/
```

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build estático
npm run build
# → genera /out con todos los archivos HTML/CSS/JS

# Previsualizar el build
npx serve out
```

---

## Deploy

El deploy es automático: cada push a `main` lanza el workflow de GitHub Actions que:

1. Instala dependencias con `npm ci`
2. Ejecuta `npm run build` (genera `/out`)
3. Publica `/out` en la rama `gh-pages` via `peaceiris/actions-gh-pages`
4. GitHub Pages sirve la rama `gh-pages` directamente

```
push a main → GitHub Actions → build → gh-pages branch → GitHub Pages
```

---

## Monetización

- **Amazon Associates** (programa de afiliados de Amazon Europa)
- Comisiones por categoría: bricolaje ~5%, jardín ~5%, electrónica ~3%
- Cookie de 24h desde el clic (90 días si añade al carrito)
- **Pendiente:** sustituir `TU_TAG_AQUI` en los enlaces por el tag real de Associates

---

## Agentes IA utilizados

Este proyecto fue construido con la coordinación de dos agentes IA especializados:

- **RankMaestro** — Estrategia SEO, arquitectura de silos, estructura de artículos, schema.org, criterios de conversión Amazon
- **MasterReact** — Stack tecnológico, arquitectura Next.js, componentes TypeScript, configuración de deploy
