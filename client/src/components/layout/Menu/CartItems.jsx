import { CartItem } from '#components'

const CartItems = () => {
  return (
        <div className="px-4 py-2">
          <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">Detalles de orden</h1>

          <div className="mt-4 overflow-y-scroll scrollbar-hide h-40">
            <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-2">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />

              
            </div>
          </div>
        </div>
  )
}

export default CartItems