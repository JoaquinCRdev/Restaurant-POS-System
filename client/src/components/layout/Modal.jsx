const Modal = ({title, onClose, isOpen, children}) => {
    if (!isOpen) return null;
return (
    <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg w-full max-w-lg mx-4">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700/50">
                <h2 className="text-xl text-[#f5f5f5] font-semibold">{title}</h2>
                <button onClick={onClose} className="text-red-500 text-5xl hover:text-red-300">&times;</button>
            </div>
            <div className="p-6">
                 {children} 
            </div>
        </div>
    </div>
)
}

export default Modal