const Bill = () => {
  return (
    <>
        <div className="flex items-center justify-between px-5 mt-2">
            <p className="text-xs text-[#ababab] font-medium mt-2">Items(6)</p>
            <h1 className="text-[#f5f5f5] text-md font-bold ">$240</h1>
        </div>
        <div className="flex items-center justify-between px-5 mt-2">
            <p className="text-xs text-[#ababab] font-medium mt-2">Tax(5.25%)</p>
            <h1 className="text-[#f5f5f5] text-md font-bold ">$15</h1>
        </div>
        <div className="flex items-center gap-3 px-5 mt-4">
            <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold 
            hover:bg-[#2a2a2a] hover:text-white transition-all duration-200 hover:scale-[1.02]">
                Efectivo
            </button>

            <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold 
            hover:bg-[#2a2a2a] hover:text-white transition-all duration-200 hover:scale-[1.02]">
                Transferencia
            </button>
        
        </div>
        <div className="flex items-center gap-3 px-1 mt-1">
            <button className="bg-[#025cca] px-4 py-1 w-full rounded-lg text-[#ababab] font-semibold text-lg 
            hover:bg-[#0147a3] hover:text-white transition-all duration-200 hover:scale-[1.03]">
                Recibo
            </button>

            <button className="bg-[#f6b100] px-4 py-1 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg 
            hover:bg-[#d99900] hover:text-black transition-all duration-200 hover:scale-[1.03]">
                Ubicar mesa
            </button>
        </div>

    </>
  )
}

export default Bill