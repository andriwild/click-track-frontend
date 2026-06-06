import { clearCart, getCartItems } from '../stores/cart'
import type { Locale } from '../i18n'

const CHECKOUT_FUNCTION_URL =
  'https://xhhticogilsokkpypzwe.supabase.co/functions/v1/create-checkout-session'

// Shipping region selected in the cart. Maps to the country allowlist and
// shipping rate the Edge Function applies to the Stripe Checkout Session.
export type CheckoutRegion = 'CH' | 'INTL'

export async function initiateCheckout(
  lang: Locale,
  newsletter = false,
  region: CheckoutRegion = 'CH'
) {
  const items = getCartItems().map(({ product, quantity }) => ({
    priceId: product.stripePriceId,
    quantity,
  }))

  if (items.length === 0) return

  const res = await fetch(CHECKOUT_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items, lang, newsletter, region }),
  })

  if (!res.ok) {
    throw new Error('Checkout failed')
  }

  const { url } = await res.json()
  clearCart()
  window.location.href = url
}
