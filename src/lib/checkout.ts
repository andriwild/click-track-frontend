import { clearCart, getCartItems } from '../stores/cart'
import type { Locale } from '../i18n'

const CHECKOUT_FUNCTION_URL =
  'https://xhhticogilsokkpypzwe.supabase.co/functions/v1/create-checkout-session'

const INTERNATIONAL_PAYMENT_LINK =
  'https://buy.stripe.com/7sY8wObaRbaJ6nK62J1ZS05'

export async function initiateCheckout(lang: Locale, newsletter = false) {
  const items = getCartItems().map(({ product, quantity }) => ({
    priceId: product.stripePriceId,
    quantity,
  }))

  if (items.length === 0) return

  const res = await fetch(CHECKOUT_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items, lang, newsletter }),
  })

  if (!res.ok) {
    throw new Error('Checkout failed')
  }

  const { url } = await res.json()
  clearCart()
  window.location.href = url
}

export function redirectToInternationalCheckout(newsletter = false) {
  const url = new URL(INTERNATIONAL_PAYMENT_LINK)
  if (newsletter) {
    url.searchParams.set('client_reference_id', 'newsletter_yes')
  }
  window.location.href = url.toString()
}
