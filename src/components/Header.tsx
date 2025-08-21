import { Bell, Search } from "lucide-react";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center px-6 gap-6">
      {/* Logo */}
      <div className="w-64 flex-shrink-0 flex items-center">
        <img src={Logo} alt="InfraWatch" className="h-8" />
      </div>

      {/* Input de pesquisa com ícone */}
      <div className="relative flex-grow max-w-xl">
        <Search size={18} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar por sistemas, alertas, relatórios..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      {/* Notificações */}
      <button className="relative">
        <Bell size={20} className="text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
          3
        </span>
      </button>
    </header>
  );
}
