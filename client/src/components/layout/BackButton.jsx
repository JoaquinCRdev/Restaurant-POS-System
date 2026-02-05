import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <button onClick={()=> navigate(-1)} className="cursor-pointer text-white bg-[#025cca] p-3 text-xl font-bold rounded-full hover:bg-[#014a9c] transition-colors duration-200">
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton