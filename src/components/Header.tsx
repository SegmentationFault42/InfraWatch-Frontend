import { Bell, Search, Menu } from "lucide-react";
import Logo from "../assets/Logo.svg";

interface HeaderProps {
  onBurgerClick?: () => void;
}

export function Header({ onBurgerClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 lg:px-6 z-50">
      
      {/* Burger mobile */}
      {onBurgerClick && (
        <button
          onClick={onBurgerClick}
          className="md:hidden bg-gray-100 p-2 rounded-md flex items-center justify-center mr-3"
        >
          <Menu size={20} className="text-gray-700" />
        </button>
      )}

      {/* Logo */}
      <div className="flex-shrink-0 w-64 flex justify-center md:justify-center relative">
        {/* No tablet: centraliza horizontalmente */}
        <img
          src={Logo}
          alt="InfraWatch"
          className="h-12 md:absolute md:left-1/2 md:translate-x-[-50%] lg:relative lg:left-0 lg:translate-x-0"
        />
      </div>

      {/* Barra de pesquisa desktop */}
      <div className="hidden lg:flex flex-1 max-w-[500px] mx-6 relative">
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Pesquisar por sistemas, alertas, relatórios..."
          className="w-full max-w-full pl-10 pr-4 py-2 bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none rounded-md"
        />
      </div>

      {/* Notificações */}
      <div className="flex-shrink-0 ml-auto">
        <button className="relative bg-gray-100 p-2 rounded-full flex items-center justify-center">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute -top-1 -right-[5px] bg-red-500 text-white text-[10px] px-[5px] rounded-full font-semibold leading-none min-w-[15px] text-center">
            3
          </span>
        </button>
      </div>
    </header>
  );
}
