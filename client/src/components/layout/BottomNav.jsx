import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "#pages";
import { useDispatch } from "react-redux";
import { setCustomer } from "#redux/slices/customerSlice";

const BottomNav = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [guestCount, setGuestCount] = useState(1);

  const [name, setName] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const isActive = (path) => location.pathname === path;

  const handleCreateOrder = () => {

    if (name === "" || guestCount === 0) return

    //send the data to store
    dispatch(setCustomer({
      name,
      guests: guestCount
    }))

    navigate("/tables")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button onClick={()=> navigate("/")} className={`flex items-center justify-center w-50 rounded-[20px] cursor-pointer hover:bg-[#343434] transition-colors duration-200 ${ isActive('/')? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}>
        <FaHome className="inline mr-2" size={30} /> <p>Inicio</p>
      </button>
      <button onClick={()=> navigate("/orders")} className={`flex items-center justify-center w-50 rounded-[20px] cursor-pointer hover:bg-[#343434] transition-colors duration-200 ${ isActive('/orders')? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}>
        <MdOutlineReorder className="inline mr-2" size={30} />
        <p>Ordenes</p>
      </button>
      <button onClick={()=> navigate("/tables")} className={`flex items-center justify-center w-50 rounded-[20px] cursor-pointer hover:bg-[#343434] transition-colors duration-200 ${ isActive('/tables')? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}>
        <MdTableBar className="inline mr-2" size={30} /> <p>Mesas</p>
      </button>
      <button onClick={()=> navigate("/more")} className={`flex items-center justify-center w-50 rounded-[20px] cursor-pointer hover:bg-[#343434] transition-colors duration-200 ${ isActive('/more')? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}>
        <CiCircleMore className="inline mr-2" size={30} /> <p>Más</p>
      </button>

      <button disabled={isActive("/tables") || isActive("/menu")} onClick={toggleModal} className="absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 cursor-pointer hover:bg-[#d99a00] left-1/2 transform -translate-x-1/2 transition-colors duration-200">  
        <BiSolidDish size={30}/>
      </button>

      <Modal title="Crear orden" isOpen={isModalOpen} onClose={toggleModal}>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">A nombre de...</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="" placeholder="ingresa el nombre del cliente" id="" 
            className="bg-transparent flex-1 text-white focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">Comensales</label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button className="text-yellow-500 text-2xl hover:text-yellow-700" onClick={() => setGuestCount(prev => Math.max(1, prev - 1))}>&minus;</button>
            <span className="text-white">{guestCount} {guestCount === 1 ? "persona" : "personas"}</span>
            <button className="text-yellow-500 text-2xl hover:text-yellow-700" onClick={() => setGuestCount(prev => prev + 1)}>&#43;</button>
          </div>
        </div>
        <button onClick={handleCreateOrder} className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-[#bd8a09]">
          Crear orden
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
