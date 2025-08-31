import { Bell, Search, Menu } from "lucide-react";
import Logo from "../assets/Logo.svg";

interface HeaderProps {
  onBurgerClick?: () => void;
}

const colors = {
  background: "bg-white",
  border: "border-gray-200",
  buttonBg: "bg-gray-100",
  buttonIcon: "text-gray-700",
  searchIcon: "text-gray-400",
  searchText: "text-gray-700",
  searchPlaceholder: "placeholder-gray-400",
  notificationBadgeBg: "bg-red-500",
  notificationBadgeText: "text-white",
};

export function Header({ onBurgerClick }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 ${colors.background} ${colors.border} flex items-center px-4 lg:px-6 z-50`}
    >
      {/* Burger mobile */}
      {onBurgerClick && (
        <button
          onClick={onBurgerClick}
          className={`md:hidden ${colors.buttonBg} p-2 rounded-md flex items-center justify-center mr-3`}
        >
          <Menu size={20} className={colors.buttonIcon} />
        </button>
      )}

      {/* Logo */}
      <div className="flex-shrink-0 w-64 flex justify-center md:justify-center relative">
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
          className={`absolute top-1/2 left-3 -translate-y-1/2 ${colors.searchIcon}`}
        />
        <input
          type="text"
          placeholder="Pesquisar por sistemas, alertas, relatórios..."
          className={`w-full max-w-full pl-10 pr-4 py-2 ${colors.buttonBg} text-sm ${colors.searchText} ${colors.searchPlaceholder} focus:outline-none rounded-md`}
        />
      </div>

      {/* Notificações */}
      <div className="flex-shrink-0 ml-auto">
        <button
          className={`relative ${colors.buttonBg} p-2 rounded-full flex items-center justify-center`}
        >
          <Bell size={20} className={colors.buttonIcon} />
          <span
            className={`absolute -top-1 -right-[5px] ${colors.notificationBadgeBg} ${colors.notificationBadgeText} text-[10px] px-[5px] rounded-full font-semibold leading-none min-w-[15px] text-center`}
          >
            3
          </span>
        </button>
      </div>
    </header>
  );
}
