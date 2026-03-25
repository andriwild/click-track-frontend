import { clearCart, getCartItems } from '../stores/cart'
import type { Locale } from '../i18n'

const CHECKOUT_FUNCTION_URL =
  'https://xhhticogilsokkpypzwe.supabase.co/functions/v1/create-checkout-session'

export async function initiateCheckout(lang: Locale) {
  const items = getCartItems().map(({ product, quantity }) => ({
    priceId: product.stripePriceId,
    quantity,
  }))

  if (items.length === 0) return

  const res = await fetch(CHECKOUT_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items, lang }),
  })

  if (!res.ok) {
    throw new Error('Checkout failed')
  }

  const { url } = await res.json()
  clearCart()
  window.location.href = url
}
