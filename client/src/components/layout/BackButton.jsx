import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <button onClick={()=> navigate(-1)} className="text-white bg-[#025cca] p-3 text-xl font-bold rounded-lg">
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton