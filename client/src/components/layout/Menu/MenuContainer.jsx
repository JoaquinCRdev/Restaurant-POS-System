import { GrRadialSelected } from "react-icons/gr";
import { menus } from "#constants";
import { useState } from "react";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus?.[0] ?? { items: [] });
  // ahora es un objeto { [itemId]: count }
  const [itemsCount, setItemsCount] = useState({});

  const increment = (id) => {
    setItemsCount((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setItemsCount((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current - 1);
      // si querés, podés eliminar la clave cuando llega a 0:
      // const { [id]: _, ...rest } = prev;
      // return next === 0 ? rest : { ...prev, [id]: next };
      return { ...prev, [id]: next };
    });
  };

  return (
    // contenedor columna que ocupa toda la altura padre
    <div className="flex flex-col h-full min-h-0">
      {/* fila de categorías (no necesita scroll) */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full shrink-0">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg min-h-25 cursor-pointer bg-[#2c2c2c] hover:bg-[#3a3a3a] transition-colors duration-200"
            style={{ background: menu.bgColor }}
            onClick={() => setSelected(menu)}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && <GrRadialSelected className="text-white" size={20} />}
            </div>
            <p className="text-[#f5f5f5] text-sm font-semibold">{(menu.items || []).length} items</p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-[#2a2a2a]" />

      {/* Zona de items: debe ocupar el espacio restante y permitir scroll */}
      <div className="px-10 py-4 w-full flex-1 min-h-0">
        <div className="grid grid-cols-4 gap-4 h-full overflow-y-auto scrollbar-hide min-h-0 pb-24">
          {(selected?.items || []).map((item) => {
            const count = itemsCount[item.id] || 0;
            return (
              <div
                key={item.id}
                className="flex flex-col items-start justify-between p-4 rounded-lg min-h-25 cursor-pointer bg-[#2c2c2c] hover:bg-[#3a3a3a] transition-colors duration-200"
              >
                <h1 className="text-[#f5f5f5] text-sm font-semibold">{item.name}</h1>

                <div className="flex items-center justify-between w-full">
                  <p className="text-[#f5f5f5] text-xl font-bold">${item.price}</p>

                  <div className="flex items-center justify-between bg-[#1f1f1f] px-2 py-2 rounded-lg gap-2">
                    <button
                      type="button"
                      className="text-yellow-500 text-2xl hover:text-yellow-700"
                      onClick={() => decrement(item.id)}
                      aria-label={`restar ${item.name}`}
                    >
                      &minus;
                    </button>
                    <span className="text-white">{count}</span>
                    <button
                      type="button"
                      className="text-yellow-500 text-2xl hover:text-yellow-700"
                      onClick={() => increment(item.id)}
                      aria-label={`sumar ${item.name}`}
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Spacer que ocupa toda la fila del grid y añade altura extra visible */}
          <div className="col-span-full h-24" aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
