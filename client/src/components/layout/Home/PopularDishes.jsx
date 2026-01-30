import { Link } from "react-router-dom"
import { popularDishes } from "#constants"

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
        <div className="bg-[#1a1a1a] w-full rounded-lg">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Platos Populares</h1>
                <Link to="/orders" className="text-[#025cca] text-sm font-semibold">Ver todos los platos</Link>
            </div>

            {/* Dishes List */}
            <div className="overflow-y-scroll h-115 scrollbar-hide">
                {
                    popularDishes.map((dish) => {
                        return (
                            <div key={dish.id} className="flex items-center justify-between px-6 py-4 border-t border-[#2a2a2a]">
                                <div className="flex items-center gap-4">
                                    <div className="text-[#f5f5f5] font-bold text-xl mr-5">
                                        {dish.id < 10 ? `0${dish.id}` : dish.id}
                                    </div>

                                    <img src={dish.image} className='h-16 w-16 rounded-lg' alt={dish.name} />
                                    
                                    <div className="flex flex-col items-start">
                                        <h1 className="text-[#f5f5f5] text-md font-semibold tracking-wide">{dish.name}</h1>
                                        <p className="text-[#f5f5f5] text-sm font-semibold mt-1">
                                            <span className="text-[#ababab]">Ordenes: </span>
                                            {dish.numberOfOrders}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default PopularDishes