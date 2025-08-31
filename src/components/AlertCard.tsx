import type { ReactNode } from "react";

interface AlertCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
  color?: string;
}

const colors = {
  textDefault: "text-gray-700",
  textTitle: "text-gray-500",
  background: "bg-white",
};

export function AlertCard({
  title,
  value,
  icon,
  color = colors.textDefault,
}: AlertCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow-sm flex items-center justify-between ${colors.background}`}>
      <div>
        <p className={`text-xs ${colors.textTitle}`}>{title}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
      </div>
      {icon && <div className="text-2xl">{icon}</div>}
    </div>
  );
}
