import {
  Home, Bell, ListChecks, FileText, Activity,
  Settings, Terminal, User, LogOut, Edit2
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ProfileModal } from "./ProfileModal";

// Paleta de cores
const colors = {
  sidebarBg: "bg-white",
  sidebarBorder: "border-gray-100",
  overlay: "bg-black/20",
  userName: "text-gray-900",
  userRole: "text-gray-500",
  userPlaceholder: "bg-gray-300",
  iconDefault: "text-gray-500",
  iconActive: "text-[#5b3cc4]",
  linkText: "text-gray-700",
  linkActiveBg: "bg-[#f4f0fa]",
  linkActiveBorder: "border-[#5b3cc4]",
  linkHoverBg: "hover:bg-gray-100",
  dropdownBg: "bg-white",
  dropdownBorder: "border-gray-200",
  dropdownHover: "hover:bg-gray-100",
  logoutText: "text-red-500",
  logoutHoverBg: "hover:bg-red-50",
};

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
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 ${colors.sidebarBg} border-r ${colors.sidebarBorder} flex flex-col z-40 lg:translate-x-0 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Topo */}
        <div className="px-6 pt-6 pb-3 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 ${colors.userPlaceholder} rounded-full overflow-hidden flex items-center justify-center`}>
              {!imgError ? (
                <img
                  src="https://images5.alphacoders.com/134/1345309.jpeg"
                  alt="Kiyotaka U."
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <User size={28} className={colors.iconDefault} />
              )}
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className={`text-sm font-bold ${colors.userName}`}>Kiyotaka U.</span>
              <span className={`text-xs -mt-[2px] ${colors.userRole}`}>Software Engineer</span>
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
                        ? `${colors.linkActiveBg} ${colors.iconActive} border-l-4 ${colors.linkActiveBorder}`
                        : `${colors.linkText} ${colors.linkHoverBg} border-l-4 border-transparent`
                    }`}
                  >
                    <Icon size={18} className={`${isActive ? colors.iconActive : colors.iconDefault}`} />
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
                ? `${colors.linkActiveBg} ${colors.iconActive} border-l-4 ${colors.linkActiveBorder}`
                : `${colors.linkText} ${colors.linkHoverBg} border-l-4 border-transparent`
            }`}
          >
            <Settings size={18} className={location.pathname === "/settings" ? colors.iconActive : colors.iconDefault} />
            Configurações
          </Link>
        </div>
      </aside>

      {/* Overlay tablet/mobile */}
      {isOpen && (
        <div
          className={`fixed inset-0 ${colors.overlay} lg:hidden z-30`}
          onClick={onClose}
        />
      )}

      {/* Menu Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className={`fixed ${colors.dropdownBg} border ${colors.dropdownBorder} rounded-lg shadow-lg overflow-hidden animate-fadeSlide z-50`}
          style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px`, width: "200px" }}
        >
          <button
            onClick={() => { setProfileModalOpen(true); setMenuOpen(false); }}
            className={`flex items-center gap-2 px-4 py-3 w-full ${colors.dropdownHover} transition`}
          >
            <Edit2 size={18} className={colors.iconDefault} />
            Editar Perfil
          </button>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-2 px-4 py-3 w-full ${colors.logoutText} ${colors.logoutHoverBg} transition`}
          >
            <LogOut size={18} className={colors.logoutText} />
            Logout
          </button>
        </div>
      )}

      {/* Modal do Perfil */}
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </>
  );
}
