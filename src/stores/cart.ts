import { atom, computed } from 'nanostores'
import { persistentMap } from '@nanostores/persistent'
import { products, type Product } from '../config/products'

// Cart state: { [stripePriceId]: quantity }
export const $cart = persistentMap<Record<string, string>>('cart:', {})

// Cart open/close state
export const $cartOpen = atom(false)

export function addToCart(priceId: string) {
  const current = parseInt($cart.get()[priceId] || '0', 10)
  $cart.setKey(priceId, String(current + 1))
  $cartOpen.set(true)
}

export function removeFromCart(priceId: string) {
  const current = { ...$cart.get() }
  delete current[priceId]
  // Reset by setting quantity to 0 then removing
  $cart.setKey(priceId, '0')
  // persistentMap doesn't support delete, so we set to '0' and filter in getCartItems
}

export function updateQuantity(priceId: string, qty: number) {
  if (qty <= 0) {
    $cart.setKey(priceId, '0')
  } else {
    $cart.setKey(priceId, String(Math.min(qty, 10)))
  }
}

export function clearCart() {
  const keys = Object.keys($cart.get())
  for (const key of keys) {
    $cart.setKey(key, '0')
  }
}

export interface CartItem {
  product: Product
  quantity: number
}

export function getCartItems(): CartItem[] {
  const cart = $cart.get()
  const items: CartItem[] = []
  for (const product of products) {
    const qty = parseInt(cart[product.stripePriceId] || '0', 10)
    if (qty > 0) {
      items.push({ product, quantity: qty })
    }
  }
  return items
}

export const $cartCount = computed($cart, (cart) => {
  return Object.values(cart).reduce(
    (sum, qty) => sum + Math.max(0, parseInt(qty || '0', 10)),
    0
  )
})

export const $cartTotal = computed($cart, (cart) => {
  let total = 0
  for (const product of products) {
    const qty = Math.max(0, parseInt(cart[product.stripePriceId] || '0', 10))
    total += product.priceCHF * qty
  }
  return total
})
