export interface Product {
  slug: string
  stripePriceId: string
  priceCHF: number // in cents
  image: string
  badge?: string // i18n key
}

export const products: Product[] = [
  {
    slug: 'single-pack',
    stripePriceId: 'price_1T5qDHApnOf6m4doN3DwbrKW',
    priceCHF: 3900,
    image: '/product_single.png',
  },
  {
    slug: 'duo-pack',
    stripePriceId: 'price_1T5q4SApnOf6m4dod8NScP3u',
    priceCHF: 4900,
    image: '/product.png',
    badge: 'mostPopular',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductByPriceId(priceId: string): Product | undefined {
  return products.find((p) => p.stripePriceId === priceId)
}

export function formatPrice(cents: number): string {
  return `${(cents / 100).toFixed(0)} CHF`
}
