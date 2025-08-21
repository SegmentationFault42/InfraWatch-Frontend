import { Bell, Search } from "lucide-react";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-6">
      <div className="w-64 flex-shrink-0 flex justify-center items-center">
        <img src={Logo} alt="InfraWatch" className="h-12" />
      </div>

      <div className="relative flex-grow max-w-xl">
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Pesquisar por sistemas, alertas, relatórios..."
          className="w-full pl-10 pr-4 py-2 bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none rounded-md"
        />
      </div>

      <button className="relative ml-auto bg-gray-100 p-2 rounded-full flex items-center justify-center">
        <Bell size={20} className="text-gray-700" />
        <span className="absolute -top-1 -right-[5px] bg-red-500 text-white text-[10px] px-[5px] rounded-full font-semibold leading-none min-w-[15px] text-center">
          3
        </span>
      </button>
    </header>
  );
}
