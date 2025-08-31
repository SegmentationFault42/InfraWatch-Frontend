import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  status: "up" | "down" | "warning";
  host: string;
  lastCheck: string;
};

// Paleta de cores
const colors = {
  cardBg: "bg-white",
  cardBorder: "border-gray-200",
  cardShadow: "shadow-md",
  titleText: "text-[#3a2e5e]",
  labelText: "text-gray-800",
  valueText: {
    up: "text-green-600",
    down: "text-red-600",
    warning: "text-yellow-600",
  },
  buttonBg: "bg-[#5b3cc4]",
  buttonHover: "hover:bg-[#4a2ea1]",
  buttonText: "text-white",
};

export function SystemCard({ title, status, host, lastCheck }: Props) {
  const statusConfig: Record<
    Props["status"],
    { label: string; icon: ReactNode; color: string }
  > = {
    up: {
      label: "UP",
      icon: <CheckCircle size={20} className={colors.valueText.up} />,
      color: colors.valueText.up,
    },
    down: {
      label: "Down",
      icon: <XCircle size={20} className={colors.valueText.down} />,
      color: colors.valueText.down,
    },
    warning: {
      label: "Latência Alta na API",
      icon: <AlertTriangle size={20} className={colors.valueText.warning} />,
      color: colors.valueText.warning,
    },
  };

  return (
    <div className={`p-5 rounded-xl ${colors.cardShadow} border ${colors.cardBorder} ${colors.cardBg} flex flex-col justify-between`}>
      <div className="flex items-center justify-between">
        <h3 className={`text-base font-semibold ${colors.titleText}`}>{title}</h3>
        {statusConfig[status].icon}
      </div>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <div>
          <span className={`font-medium ${colors.labelText}`}>Status:</span>{" "}
          <span className={statusConfig[status].color}>
            {statusConfig[status].label}
          </span>
        </div>
        <div>
          <span className={`font-medium ${colors.labelText}`}>Host:</span> {host}
        </div>
        <div>
          <span className={`font-medium ${colors.labelText}`}>Última verificação:</span>{" "}
          {lastCheck}
        </div>
      </div>

      <button className={`mt-4 px-4 py-2 rounded-md ${colors.buttonBg} ${colors.buttonText} ${colors.buttonHover} text-sm font-medium shadow`}>
        Ver mais detalhes do Sistema
      </button>
    </div>
  );
}
