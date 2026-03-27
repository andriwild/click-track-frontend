export type ProductCategory = 'wristband' | 'holder' | 'accessory'

export type ProductSize = 'S' | 'M' | 'L'

export interface Product {
  slug: string
  stripePriceId: string
  priceCHF: number // in cents
  image: string
  category: ProductCategory
  variantGroup?: string // groups size variants under one product card
  size?: ProductSize
}

export const products: Product[] = [
  {
    slug: 'wristband',
    stripePriceId: 'price_1TEvAVApnOf6m4doqtBC7OJX',
    priceCHF: 2900,
    image: '/product_single.png',
    category: 'wristband',
  },
  {
    slug: 'holder-squash-s',
    stripePriceId: 'price_1TEvJPApnOf6m4dozIv5Ze8W',
    priceCHF: 1900,
    image: '/holder_squash.png',
    category: 'holder',
    variantGroup: 'holder-squash',
    size: 'S',
  },
  {
    slug: 'holder-squash-m',
    stripePriceId: 'price_1TFVZDApnOf6m4doCkFyvOI7',
    priceCHF: 1900,
    image: '/holder_squash.png',
    category: 'holder',
    variantGroup: 'holder-squash',
    size: 'M',
  },
  {
    slug: 'holder-squash-l',
    stripePriceId: 'price_1TFVZiApnOf6m4do3uj4HloR',
    priceCHF: 1900,
    image: '/holder_squash.png',
    category: 'holder',
    variantGroup: 'holder-squash',
    size: 'L',
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
