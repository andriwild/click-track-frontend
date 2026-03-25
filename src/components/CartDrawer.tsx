import { useStore } from '@nanostores/react'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import {
  $cart,
  $cartOpen,
  $cartTotal,
  getCartItems,
  updateQuantity,
} from '../stores/cart'
import { formatPrice } from '../config/products'
import { getTranslations, type Locale } from '../i18n'
import { initiateCheckout } from '../lib/checkout'
import { useState } from 'react'

export function CartDrawer({ lang = 'de' }: { lang?: Locale }) {
  const isOpen = useStore($cartOpen)
  useStore($cart)
  const total = useStore($cartTotal)
  const t = getTranslations(lang)
  const items = getCartItems()
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleCheckout = async () => {
    setLoading(true)
    try {
      await initiateCheckout(lang)
    } catch {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={() => $cartOpen.set(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-[61] flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-zinc-50 flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t.cart.title}
          </h2>
          <button
            onClick={() => $cartOpen.set(false)}
            className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label={t.cart.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500">
              <ShoppingBag className="h-12 w-12 mb-4 opacity-30" />
              <p className="text-lg font-medium">{t.cart.empty}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.slug}
                  className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50"
                >
                  <img
                    src={product.image}
                    alt={
                      t.products[product.slug as 'single-pack' | 'duo-pack']
                        .name
                    }
                    className="w-16 h-16 rounded-xl object-cover bg-zinc-800"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-100 text-sm truncate">
                      {
                        t.products[product.slug as 'single-pack' | 'duo-pack']
                          .name
                      }
                    </h3>
                    <p className="text-emerald-400 font-bold text-sm mt-1">
                      {formatPrice(product.priceCHF)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(product.stripePriceId, quantity - 1)
                        }
                        className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {quantity === 1 ? (
                          <Trash2 className="h-3.5 w-3.5" />
                        ) : (
                          <Minus className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-zinc-200">
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(product.stripePriceId, quantity + 1)
                        }
                        className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-zinc-100 text-sm">
                      {formatPrice(product.priceCHF * quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-800 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="font-medium text-zinc-400">{t.cart.total}</span>
              <span className="font-extrabold text-zinc-50">
                {formatPrice(total)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              {loading ? '...' : t.cart.checkout}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
