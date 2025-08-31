// src/components/Sidebar.tsx
import {
  Home, Bell, ListChecks, FileText, Activity,
  Settings, Terminal, User, LogOut, Edit2
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ProfileModal } from "./ProfileModal";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const items = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Sistemas", icon: Activity, path: "/system" },
    { name: "Alertas", icon: Bell, path: "/alerts" },
    { name: "SLA", icon: ListChecks, path: "/sla" },
    { name: "Relatórios", icon: FileText, path: "/reports" },
    { name: "Logs", icon: Terminal, path: "/logs" },
  ];

  const handleLogout = () => {
    setTimeout(() => navigate("/"), 200);
  };

  // Fecha menu dropdown clicando fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const openMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.right + window.scrollX,
      });
    }
    setMenuOpen(true);
  };

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-100 flex flex-col z-40 lg:translate-x-0 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Topo */}
        <div className="px-6 pt-6 pb-3 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              {!imgError ? (
                <img
                  src="https://images5.alphacoders.com/134/1345309.jpeg"
                  alt="Kiyotaka U."
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <User size={28} className="text-gray-500" />
              )}
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-sm font-bold text-gray-900">Kiyotaka U.</span>
              <span className="text-xs text-gray-500 -mt-[2px]">Software Engineer</span>
            </div>
          </div>

          <div className="relative">
            <button
              ref={buttonRef}
              onClick={openMenu}
              className={`w-6 h-6 flex items-center justify-center rounded-md transition-all ${menuOpen ? "bg-gray-200 text-gray-700" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            >
              <span className="text-xl">...</span>
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 mt-2 overflow-y-auto">
          <ul>
            {items.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path === "/dashboard" && location.pathname === "/");

              const Icon = item.icon;
              return (
                <li key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`group flex items-center gap-3 px-6 py-3 text-sm font-semibold transition-all w-full ${
                      isActive
                        ? "bg-[#f4f0fa] text-[#5b3cc4] border-l-4 border-[#5b3cc4]"
                        : "text-gray-700 hover:bg-gray-100 border-l-4 border-transparent"
                    }`}
                  >
                    <Icon size={18} className={`${isActive ? "text-[#5b3cc4]" : "text-gray-500"}`} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Configurações */}
        <div className="mt-auto border-t border-gray-200">
          <Link
            to="/settings"
            className={`flex items-center gap-2 px-6 py-3 w-full text-sm font-semibold transition-all ${
              location.pathname === "/settings"
                ? "bg-[#f4f0fa] text-[#5b3cc4] border-l-4 border-[#5b3cc4]"
                : "text-gray-700 hover:bg-gray-100 border-l-4 border-transparent"
            }`}
          >
            <Settings size={18} className={location.pathname === "/settings" ? "text-[#5b3cc4]" : "text-gray-500"} />
            Configurações
          </Link>
        </div>
      </aside>

      {/* Overlay tablet/mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Menu Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fadeSlide z-50"
          style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px`, width: "200px" }}
        >
          <button
            onClick={() => { setProfileModalOpen(true); setMenuOpen(false); }}
            className="flex items-center gap-2 px-4 py-3 w-full hover:bg-gray-100 transition"
          >
            <Edit2 size={18} className="text-gray-600" />
            Editar Perfil
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-3 w-full text-red-500 hover:bg-red-50 transition"
          >
            <LogOut size={18} className="text-red-500" />
            Logout
          </button>
        </div>
      )}

      {/* Modal do Perfil */}
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </>
  );
}
