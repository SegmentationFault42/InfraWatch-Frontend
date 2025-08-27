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
    up: { label: "UP", icon: <CheckCircle size={16} />, color: "text-green-600" },
    down: { label: "Down", icon: <XCircle size={16} />, color: "text-red-600" },
    warning: { label: "Latência Alta na API", icon: <AlertTriangle size={16} />, color: "text-yellow-600" },
  };

  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex flex-col">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-800">Status:</span>
          <span className={`flex items-center gap-1 ${statusConfig[status].color}`}>
            {statusConfig[status].icon} {statusConfig[status].label}
          </span>
        </div>
        <div>
          <span className="font-medium text-gray-800">Host:</span> {host}
        </div>
        <div>
          <span className="font-medium text-gray-800">Última verificação:</span> {lastCheck}
        </div>
      </div>
    </div>
  );
}
