import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  color?: "green" | "yellow" | "blue" | "red";
  customRightContent?: ReactNode;
};

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  color = "blue",
  customRightContent,
}: Props) {
  const trendColors: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
      {/* Topo: título e tendência */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        {trend && (
          <span
            className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${trendColors[color]}`}
          >
            <ArrowUpRight size={12} />
            {trend}
          </span>
        )}
      </div>

      {/* Valor + ícones à direita */}
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {customRightContent && <div className="flex items-center gap-4">{customRightContent}</div>}
      </div>

      {/* Subtítulo */}
      {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
    </div>
  );
}
