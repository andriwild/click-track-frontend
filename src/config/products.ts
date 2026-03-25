export type ProductCategory = 'wristband' | 'holder' | 'accessory'

export interface Product {
  slug: string
  stripePriceId: string
  priceCHF: number // in cents
  image: string
  category: ProductCategory
}

// TODO: Replace placeholder Price IDs with real Stripe Price IDs
export const products: Product[] = [
  {
    slug: 'wristband',
    stripePriceId: 'price_1TEvAVApnOf6m4doqtBC7OJX',
    priceCHF: 2900,
    image: '/product_single.png',
    category: 'wristband',
  },
  {
    slug: 'holder-squash',
    stripePriceId: 'price_1TEvJPApnOf6m4dozIv5Ze8W',
    priceCHF: 1900,
    image: '/holder_squash.png',
    category: 'holder',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductByPriceId(priceId: string): Product | undefined {
  return products.find((p) => p.stripePriceId === priceId)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export function formatPrice(cents: number): string {
  return `${(cents / 100).toFixed(0)} CHF`
}
