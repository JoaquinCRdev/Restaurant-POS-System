import { updateTable } from "#redux/slices/customerSlice";
import { getRandomBG } from "#utils"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

const TableCard = ({ name, status, initials, seats }) => {

        const dispatch = useDispatch()

        const navigate = useNavigate();
        const handleClick = (name) => {
                if (status === "Ocupada") return;
                dispatch(updateTable({tableNo: name}))
                navigate('/menu');
        }

return (
    <div onClick={()=> handleClick(name)} className="w-62.5 bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:bg-[#3a3a3a]">
            <div className="flex items-center justify-between px-1">
                    <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
                    <p className={`${status === "Libre" ? "text-green-600 bg-[#2e4a40]" : "text-red-600 bg-[#4a2e2e]"} px-2 py-1 rounded-lg`}> {status} </p>
            </div>

            <div className="flex items-center justify-center my-5 mb-7">
                    <div className={`${getRandomBG()} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl`}>{initials}</div>
            </div>
            <p className="text-[#ababab] text-xs">Sillas: <span className="text-[#f5f5f5]">{seats}</span></p>
    </div>
)
}

export default TableCard