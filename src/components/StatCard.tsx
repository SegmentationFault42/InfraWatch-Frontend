import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";


const colors = {
  cardBg: "bg-white",
  cardBorder: "border-gray-200",
  textTitle: "text-gray-900",
  textBody: "text-gray-900",
  textSubtitle: "text-gray-500",
  trend: {
    green: { bg: "bg-green-100", text: "text-green-700" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-700" },
    blue: { bg: "bg-blue-100", text: "text-blue-700" },
    red: { bg: "bg-red-100", text: "text-red-700" },
  },
};

type TrendColor = keyof typeof colors.trend;

type Props = {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  color?: TrendColor;
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
  return (
    <div className={`${colors.cardBg} border ${colors.cardBorder} p-5 rounded-xl shadow-sm`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className={`text-sm font-medium ${colors.textTitle}`}>{title}</h3>
        {trend && (
          <span
            className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${colors.trend[color].bg} ${colors.trend[color].text}`}
          >
            <ArrowUpRight size={12} />
            {trend}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className={`text-3xl font-bold ${colors.textBody}`}>{value}</p>
        {customRightContent && <div className="flex items-center gap-4">{customRightContent}</div>}
      </div>

      {subtitle && <p className={`text-sm mt-2 ${colors.textSubtitle}`}>{subtitle}</p>}
    </div>
  );
}
