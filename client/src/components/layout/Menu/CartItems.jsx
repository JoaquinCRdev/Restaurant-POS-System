import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaNotesMedical } from 'react-icons/fa';
import { removeItem } from '#redux/slices/cartSlice';
import { useEffect, useRef } from 'react';

const CartItems = () => {

  const cartData = useSelector(state => state.cart);

  const scrolLRef = useRef()

  useEffect(() => {
    if(scrolLRef.current){
      scrolLRef.current.scrollTo({
        top: scrolLRef.current.scrollHeight,
        behaviour: "smooth"
      })
    }
  }, [cartData])

  const dispatch = useDispatch();
  const handleRemove = (itemId)  => {
    dispatch(removeItem(itemId))
  }

  return (
        <div className="px-4 py-2">
          <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">Detalles de orden</h1>

          <div className="mt-4 overflow-y-scroll scrollbar-hide h-40" ref={scrolLRef}>
            <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-2">
              {
                cartData.length === 0 ? (
                  <p className='text-[#ababab] text-sm flex justify-center items-center h-30'>Vacio. Pide algo!</p>
                ) :
                cartData.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between">
                        <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
                          {item.name}
                        </h1>
                        <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <RiDeleteBin2Fill onClick={()=> handleRemove(item.id)} className="text-[#ababab] cursor-pointer" size={20} />
                          <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
                        </div>
                        <p className="text-[#f5f5f5] text-md font-bold">${item.price}</p>
                      </div>

                      <hr className="border-[#1a1a1a] border-t-2 mt-2 w-full" />

                    </div>
                  )
                })

              }
            </div>
          </div>
        </div>
  )
}

export default CartItems