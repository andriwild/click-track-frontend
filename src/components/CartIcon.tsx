import { useStore } from '@nanostores/react'
import { ShoppingBag } from 'lucide-react'
import { $cartCount, $cartOpen } from '../stores/cart'

export function CartIcon() {
  const count = useStore($cartCount)

  return (
    <button
      onClick={() => $cartOpen.set(true)}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
      aria-label="Cart"
    >
      <ShoppingBag className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 text-[10px] font-bold leading-none">
          {count}
        </span>
      )}
    </button>
  )
}
