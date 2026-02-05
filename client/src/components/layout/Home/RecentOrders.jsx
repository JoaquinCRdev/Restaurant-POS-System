import { Link } from "react-router-dom"
import { FaSearch } from 'react-icons/fa'
import OrderList from "./OrderList"

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
        <div className="bg-[#1a1a1a] w-full h-112.5 rounded-lg">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Ordenes Recientes</h1>
                <Link to="/orders" className="text-[#025cca] text-sm font-semibold hover:bg-[#025cca] hover:text-[#f5f5f5] transition-colors duration-200">Ver todas las órdenes</Link>
            </div>

            <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6">
                <FaSearch className="text-[#f5f5f5]" />
                
                <input 
                    type="text"
                    placeholder="Buscar ordenes recientes"
                    className="bg-[#1f1f1f] outline-none text-[#f5f5f5]" />
            </div>

            {/* Order List */}
            <div className="mt-4 px-6 overflow-y-scroll h-64 scrollbar-hide ">
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
            </div>
        </div>
    </div>
  )
}

export default RecentOrders