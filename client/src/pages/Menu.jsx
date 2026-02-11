import { BottomNav, BackButton, MenuContainer, CustomerInfo, CartItems, Bill } from "#components";
import { MdRestaurantMenu } from "react-icons/md";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div: ahora es flex-col y permite que su hijo (MenuContainer) haga scroll */}
      <div className="flex-3 flex flex-col min-h-0">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Menu</h1>
          </div>

          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer hover:bg-[#2a2a2a] rounded-lg px-3 py-2 transition-colors duration-200">
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">Customer Name</h1>
                <p className="text-xs text-[#ababab] font-medium"> Table No: 2 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <MenuContainer />
        </div>
      </div>

      {/* Right Div */}
      <div className="flex-1 bg-[#1a1a1a] mt-4 mr-3 h-195 rounded-lg pt-2">
        <CustomerInfo />

        <hr className="border-[#2a2a2a] border-t-2" />

        <CartItems />

        <hr className="border-[#2a2a2a] border-t-2" />

        <Bill />
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
