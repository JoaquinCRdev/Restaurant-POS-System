import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (

    <div className="w-125 bg-[#262626] p-4 rounded-lg mb-4">
        <div className="flex items-center gap-5">
            <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">JC</button>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Joaquin Caceres</h1>
                    <p className="text-[#ababab] text-sm ">#101/ En el lugar</p>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                    <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg"><FaCheckDouble className="inline mr-2"/> Listo</p>
                    <p className="text-[#ababab] text-sm"><FaCircle className="inline mr-2 text-green-600"/> Listo para servir</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-[#ababab]">
            <p>Febrero 12, 2026 08:32 PM</p>
            <p>8 items</p>
        </div>

        <hr className="text-[#ababab] w-full mt-4 border-t border-gray-500" />
        <div className="flex items-center justify-between mt-4">
            <h1 className="text-[#f5f5f5] text-lg font-semibold">Total</h1>
            <p className="text-[#f5f5f5] text-lg font-semibold">$ 250.00</p>
        </div>
        
    </div>

    // <div className="bg-[#2a2a2a] rounded-lg p-4 m-4">
    //   <div className="flex justify-between items-center">
    //     <h2 className="text-[#f5f5f5] font-bold">Orden #123</h2>
    //     <span className="text-[#ababab] text-sm">En Progreso</span>
    //   </div>
    //   <div className="mt-4">
    //     <p className="text-[#f5f5f5] text-sm">Hamburguesa con queso</p>
    //     <p className="text-[#f5f5f5] text-sm">Coca Cola 1L</p>
    //   </div>
    // </div>
  )
}

export default OrderCard