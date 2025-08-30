import {
  Home,
  Bell,
  ListChecks,
  FileText,
  Activity,
  Settings,
  Terminal,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  const items = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Sistemas", icon: Activity, path: "/system" },
    { name: "Alertas", icon: Bell, path: "/alerts" },
    { name: "SLA", icon: ListChecks, path: "/sla" },
    { name: "Relatórios", icon: FileText, path: "/reports" },
    { name: "Logs", icon: Terminal, path: "/logs" },
  ];

  return (
    <aside className="w-64 bg-white flex flex-col border-r border-gray-100">
      <div className="px-6 pt-6 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <img
              src="https://images5.alphacoders.com/134/1345309.jpeg"
              alt="Kiyotaka U."
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-sm font-bold text-gray-900">Kiyotaka U.</span>
            <span className="text-xs text-gray-500 -mt-[2px]">Software Engineer</span>
          </div>
        </div>
        <button className="w-6 h-6 flex items-center justify-center rounded-md bg-gray-100 text-gray-500">
          <span className="text-xl leading-none">...</span>
        </button>
      </div>

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
                  className={`group flex items-center gap-3 px-6 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#f4f0fa] text-[#5b3cc4] border-l-4 border-[#5b3cc4]"
                      : "text-gray-700 hover:bg-gray-100 border-l-4 border-transparent"
                  }`}
                >
                  <Icon
                    size={18}
                    className={`${
                      isActive ? "text-[#5b3cc4]" : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto p-6 border-t border-gray-100">
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
