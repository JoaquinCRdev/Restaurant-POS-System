import { BottomNav } from "#components"
import { OrderCard } from "#components"
import { BackButton } from "#components"
import { useState } from "react"

const Orders = () => {

  const [status, setStatus] = useState("Todas");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Ordenes</h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button onClick={()=> setStatus("Todas")} className={`cursor-pointer text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === "Todas" ? "bg-[#383838]" : ""}`}>Todas</button>
          <button onClick={()=> setStatus("En Progreso")} className={`cursor-pointer text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === "En Progreso" ? "bg-[#383838]" : ""}`}>En Progreso</button>
          <button onClick={()=> setStatus("Listas")} className={`cursor-pointer text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === "Listas" ? "bg-[#383838]" : ""}`}>Listas</button>
          <button onClick={()=> setStatus("Completas")} className={`cursor-pointer text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === "Completas" ? "bg-[#383838]" : ""}`}>Completas</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-14rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  )
}

export default Orders