import { RiDeleteBin2Fill } from "react-icons/ri"
import { FaNotesMedical } from "react-icons/fa";

const CartItem = () => {
  return (
    <>
        <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-md"> Cheesecake </h1>
                <p className="text-[#ababab] font-semibold">x2</p>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer" size={20} />
                <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">$123</p>
        </div>

        <hr className="border-[#1a1a1a] border-t-2 mt-2 w-full" />
    </>
  )
}

export default CartItem