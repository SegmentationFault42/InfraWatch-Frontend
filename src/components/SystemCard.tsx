import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  status: "up" | "down" | "warning";
  host: string;
  lastCheck: string;
};

export function SystemCard({ title, status, host, lastCheck }: Props) {
  const statusConfig: Record<
    Props["status"],
    { label: string; icon: ReactNode; color: string }
  > = {
    up: {
      label: "UP",
      icon: <CheckCircle size={20} className="text-green-600" />,
      color: "text-green-600",
    },
    down: {
      label: "Down",
      icon: <XCircle size={20} className="text-red-600" />,
      color: "text-red-600",
    },
    warning: {
      label: "Latência Alta na API",
      icon: <AlertTriangle size={20} className="text-yellow-600" />,
      color: "text-yellow-600",
    },
  };

  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-md flex flex-col justify-between">
      {/* Título + ícone no canto direito */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#3a2e5e]">{title}</h3>
        {statusConfig[status].icon}
      </div>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <div>
          <span className="font-medium text-gray-800">Status:</span>{" "}
          <span className={`${statusConfig[status].color}`}>
            {statusConfig[status].label}
          </span>
        </div>
        <div>
          <span className="font-medium text-gray-800">Host:</span> {host}
        </div>
        <div>
          <span className="font-medium text-gray-800">Última verificação:</span>{" "}
          {lastCheck}
        </div>
      </div>

      <button className="mt-4 px-4 py-2 rounded-md bg-[#5b3cc4] text-white text-sm font-medium hover:bg-[#4a2ea1] shadow">
        Ver mais detalhes do Sistema
      </button>
    </div>
  );
}
