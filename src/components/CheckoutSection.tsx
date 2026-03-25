import { useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import { getTranslations, type Locale } from '../i18n'
import { products, formatPrice } from '../config/products'
import { addToCart } from '../stores/cart'

export function CheckoutSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang)
  const [addedSlug, setAddedSlug] = useState<string | null>(null)

  const handleAdd = (slug: string, priceId: string) => {
    addToCart(priceId)
    setAddedSlug(slug)
    setTimeout(() => setAddedSlug(null), 1200)
  }

  return (
    <section
      id="checkout"
      className="w-full py-24 bg-zinc-950 text-zinc-50 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

            <div className="space-y-6">
              {products.map((product) => {
                const pt =
                  t.products[product.slug as 'single-pack' | 'duo-pack']
                const isPopular = product.badge === 'mostPopular'
                const isAdded = addedSlug === product.slug

                return (
                  <div
                    key={product.slug}
                    className={`relative rounded-3xl border ${
                      isPopular ? 'border-emerald-500/30' : 'border-zinc-800'
                    } bg-zinc-900/80 p-8 backdrop-blur-xl shadow-2xl ${
                      isPopular ? 'overflow-hidden' : ''
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 font-bold text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        {t.products.mostPopular}
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold">{pt.name}</h3>
                      <p className="text-zinc-400 mt-2">{pt.description}</p>
                    </div>

                    <div className="mb-8 flex items-baseline text-4xl font-extrabold">
                      {formatPrice(product.priceCHF)}
                      <span className="ml-2 text-lg font-medium text-zinc-500">
                        {t.products.oneTime}
                      </span>
                    </div>

                    <Button
                      className={`w-full h-14 text-lg font-bold transition-all active:scale-95 ${
                        isPopular
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                          : 'bg-zinc-100 hover:bg-white text-zinc-900'
                      }`}
                      onClick={() =>
                        handleAdd(product.slug, product.stripePriceId)
                      }
                    >
                      {isAdded ? (
                        <>
                          <Check className="mr-2 h-5 w-5" />
                          {t.cart.addedToCart}
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="mr-2 h-5 w-5" />
                          {t.products.cta}
                        </>
                      )}
                    </Button>

                    {isPopular && (
                      <p className="text-center text-xs text-zinc-500 mt-4">
                        {t.checkout.securePayment}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
