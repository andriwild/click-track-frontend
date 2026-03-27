import { useState } from 'react'
import { Check, ShoppingBag, Plus, Minus } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import {
  products,
  formatPrice,
  type ProductCategory,
  type Product,
} from '../config/products'
import { addToCart } from '../stores/cart'

const categoryOrder: ProductCategory[] = ['wristband', 'holder', 'accessory']

type DisplayItem =
  | { type: 'single'; product: Product }
  | { type: 'variant-group'; groupKey: string; variants: Product[] }

export function CheckoutSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang)
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      products.map((p) => [p.slug, p.category === 'wristband' ? 2 : 1])
    )
  )
  const [addedSlug, setAddedSlug] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({})

  const setQty = (slug: string, qty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [slug]: Math.max(1, Math.min(qty, 10)),
    }))
  }

  const handleAdd = (slug: string, priceId: string) => {
    const qty = quantities[slug] || 1
    for (let i = 0; i < qty; i++) {
      addToCart(priceId)
    }
    setAddedSlug(slug)
    setTimeout(() => setAddedSlug(null), 1200)
  }

  // Group products by category, collapsing variant groups
  function buildDisplayItems(categoryProducts: Product[]): DisplayItem[] {
    const items: DisplayItem[] = []
    const seenGroups = new Set<string>()
    for (const p of categoryProducts) {
      if (p.variantGroup) {
        if (seenGroups.has(p.variantGroup)) continue
        seenGroups.add(p.variantGroup)
        const variants = categoryProducts.filter(
          (v) => v.variantGroup === p.variantGroup
        )
        items.push({
          type: 'variant-group',
          groupKey: p.variantGroup,
          variants,
        })
      } else {
        items.push({ type: 'single', product: p })
      }
    }
    return items
  }

  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: buildDisplayItems(products.filter((p) => p.category === cat)),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <section
      id="checkout"
      className="w-full py-24 bg-zinc-950 text-zinc-50 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase relative">
              {t.checkout.title}{' '}
              <span className="text-emerald-500">{t.checkout.titleAccent}</span>
              {t.checkout.titleEnd}
            </h2>
            <p className="text-zinc-400 text-lg">{t.checkout.description}</p>

            <ul className="space-y-3 pt-4">
              {t.checkout.featuresList.map((feature: string, i: number) => (
                <li key={i} className="flex items-center text-zinc-300">
                  <div className="mr-3 p-1 rounded-full bg-emerald-500/20 text-emerald-500">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-zinc-500 pt-2">
              {t.checkout.securePayment}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

            <div className="relative space-y-8">
              {grouped.map(({ category, items }) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                    {t.products.categories[category]}
                  </h3>

                  {items.map((item) => {
                    if (item.type === 'variant-group') {
                      const { groupKey, variants } = item
                      const selected =
                        selectedSize[groupKey] || variants[0].slug
                      const activeVariant =
                        variants.find((v) => v.slug === selected) || variants[0]
                      const groupT = t.products[
                        groupKey as keyof typeof t.products
                      ] as { name: string; description: string }
                      const variantT = t.products[
                        selected as keyof typeof t.products
                      ] as { name: string; description: string }
                      const qty = quantities[selected] || 1
                      const isAdded = addedSlug === selected

                      return (
                        <div
                          key={groupKey}
                          className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-xl shadow-xl"
                        >
                          <div className="flex gap-4">
                            <img
                              src={activeVariant.image}
                              alt={groupT.name}
                              className="w-20 h-20 rounded-xl object-cover bg-zinc-800 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-bold text-zinc-100">
                                {groupT.name}
                              </h4>
                              <p className="text-sm text-zinc-400 mt-0.5">
                                {groupT.description}
                              </p>
                              <p className="text-sm text-zinc-300 font-medium mt-1">
                                {variantT.description}
                              </p>
                              <div className="flex items-baseline gap-1 mt-2">
                                <span className="text-xl font-extrabold">
                                  {formatPrice(activeVariant.priceCHF)}
                                </span>
                                <span className="text-sm text-zinc-500">
                                  {t.products.perUnit}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Size selector */}
                          <div className="mt-4">
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                              {
                                (t.products as Record<string, unknown>)
                                  .sizeLabel
                              }
                            </span>
                            <div className="flex gap-2 mt-1.5">
                              {variants.map((v) => (
                                <button
                                  key={v.slug}
                                  onClick={() =>
                                    setSelectedSize((prev) => ({
                                      ...prev,
                                      [groupKey]: v.slug,
                                    }))
                                  }
                                  className={`h-10 w-12 rounded-lg text-sm font-bold transition-all ${
                                    selected === v.slug
                                      ? 'bg-emerald-500 text-zinc-950'
                                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                                  }`}
                                >
                                  {v.size}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mt-4">
                            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800/50">
                              <button
                                onClick={() => setQty(selected, qty - 1)}
                                disabled={qty <= 1}
                                className="p-2.5 text-zinc-400 hover:text-zinc-200 transition-colors disabled:opacity-30"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-10 text-center font-bold text-zinc-200">
                                {qty}
                              </span>
                              <button
                                onClick={() => setQty(selected, qty + 1)}
                                disabled={qty >= 10}
                                className="p-2.5 text-zinc-400 hover:text-zinc-200 transition-colors disabled:opacity-30"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <button
                              onClick={() =>
                                handleAdd(selected, activeVariant.stripePriceId)
                              }
                              className="flex-1 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                              {isAdded ? (
                                <>
                                  <Check className="h-4 w-4" />
                                  {t.cart.addedToCart}
                                </>
                              ) : (
                                <>
                                  <ShoppingBag className="h-4 w-4" />
                                  {t.products.cta}
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )
                    }

                    // Single product (no variants)
                    const { product } = item
                    const pt = t.products[
                      product.slug as keyof typeof t.products
                    ] as {
                      name: string
                      description: string
                    }
                    const qty = quantities[product.slug] || 1
                    const isAdded = addedSlug === product.slug

                    return (
                      <div
                        key={product.slug}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-xl shadow-xl"
                      >
                        <div className="flex gap-4">
                          <img
                            src={product.image}
                            alt={pt.name}
                            className="w-20 h-20 rounded-xl object-cover bg-zinc-800 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-zinc-100">
                              {pt.name}
                            </h4>
                            <p className="text-sm text-zinc-400 mt-0.5">
                              {pt.description}
                            </p>
                            <div className="flex items-baseline gap-1 mt-2">
                              <span className="text-xl font-extrabold">
                                {formatPrice(product.priceCHF)}
                              </span>
                              <span className="text-sm text-zinc-500">
                                {t.products.perUnit}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                          <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800/50">
                            <button
                              onClick={() => setQty(product.slug, qty - 1)}
                              disabled={qty <= 1}
                              className="p-2.5 text-zinc-400 hover:text-zinc-200 transition-colors disabled:opacity-30"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center font-bold text-zinc-200">
                              {qty}
                            </span>
                            <button
                              onClick={() => setQty(product.slug, qty + 1)}
                              disabled={qty >= 10}
                              className="p-2.5 text-zinc-400 hover:text-zinc-200 transition-colors disabled:opacity-30"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            onClick={() =>
                              handleAdd(product.slug, product.stripePriceId)
                            }
                            className="flex-1 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                          >
                            {isAdded ? (
                              <>
                                <Check className="h-4 w-4" />
                                {t.cart.addedToCart}
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="h-4 w-4" />
                                {t.products.cta}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
