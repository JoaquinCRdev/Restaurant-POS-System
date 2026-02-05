import { BottomNav, BackButton, TableCard } from "#components"
import { useState } from "react"
import { tables } from "#constants"

const Tables = () => {

  const [status, setStatus] = useState("Todas");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Mesas</h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          <button onClick={()=> setStatus("Todas")} className={`cursor-pointer text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === "Todas" ? "bg-[#383838]" : ""} hover:bg-[#343434] transition-colors duration-200`}>Todas</button>
          <button onClick={()=> setStatus("Ocupadas")} className={`cursor-pointer text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === "Ocupadas" ? "bg-[#383838]" : ""} hover:bg-[#343434] transition-colors duration-200`}>Ocupadas</button> 
        </div>

      </div>

      <div className="flex flex-wrap justify-center items-start gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-14rem)]">
        {
          tables.map((table) => (
            <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial} />
          ))  
        }
      </div>
      
      <BottomNav />
    </section>
  )
}

export default Tables