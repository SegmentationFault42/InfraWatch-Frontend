import { Home, Bell, ListChecks, FileText, Activity, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  const items = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { name: "Sistemas", icon: <Activity size={18} />, path: "/sistemas" },
    { name: "Alertas", icon: <Bell size={18} />, path: "/alertas" },
    { name: "SLA", icon: <ListChecks size={18} />, path: "/sla" },
    { name: "Relatórios", icon: <FileText size={18} />, path: "/relatorios" },
  ];

  return (
    <aside className="w-64 bg-white flex flex-col shadow-sm">
      {/* Perfil */}
      <div className="p-6 flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          OC
        </div>
        <span className="text-sm font-semibold mt-2">Osorio C.</span>
        <span className="text-xs text-gray-500">Analista de dados</span>
      </div>

      {/* Navegação */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-semibold rounded-r-lg transition-colors
                    ${
                      isActive
                        ? "bg-violet-100 text-violet-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Rodapé */}
      <div className="p-6 border-t border-gray-100">
        <Link
          to="/config"
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-violet-700 font-semibold transition-colors"
        >
          <Settings size={18} />
          Configurações
        </Link>
      </div>
    </aside>
  );
}
