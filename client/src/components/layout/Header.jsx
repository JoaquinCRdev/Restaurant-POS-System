import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa'
import logo from '/logo.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-8 bg-[#1a1a1a]">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} className='h-8 w-8' alt="logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]"> Boutique del Sabor </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-125">
        <FaSearch className="text-[#f5f5f5]" />
        
        <input 
          type="text"
          placeholder="Buscar..."
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]" 
          name='search'
          />
      </div>

      {/* Logged User Details */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[#2a2a2a] rounded-lg px-3 py-2 transition-colors duration-200">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">Joaquin Caceres</h1>
            <p className="text-xs text-[#ababab] font-medium"> Admin </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header