import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {

  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button onClick={()=> navigate("/")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-50 rounded-[20px] cursor-pointer hover:bg-[#343434] transition-colors duration-200">
        <FaHome className="inline mr-2" size={30} /> <p>Inicio</p>
      </button>
      <button onClick={()=> navigate("/orders")} className="flex items-center justify-center text-[#ababab] w-50 cursor-pointer hover:bg-[#343434] rounded-[20px] transition-colors duration-200">
        <MdOutlineReorder className="inline mr-2" size={30} />
        <p>Ordenes</p>
      </button>
      <button onClick={()=> navigate("/tables")} className="flex items-center justify-center text-[#ababab] w-50 cursor-pointer hover:bg-[#343434] rounded-[20px] transition-colors duration-200">
        <MdTableBar className="inline mr-2" size={30} /> <p>Mesas</p>
      </button>
      <button onClick={()=> navigate("/more")} className="flex items-center justify-center text-[#ababab] w-50 cursor-pointer hover:bg-[#343434] rounded-[20px] transition-colors duration-200">
        <CiCircleMore className="inline mr-2" size={30} /> <p>Más</p>
      </button>

      <button className="absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 cursor-pointer hover:bg-[#d99a00] left-1/2 transform -translate-x-1/2 transition-colors duration-200">  
        <BiSolidDish size={30}/>
      </button>
    </div>
  );
};

export default BottomNav;
