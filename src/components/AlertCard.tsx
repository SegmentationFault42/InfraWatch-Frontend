import type { ReactNode } from "react";

interface AlertCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
  color?: string;
}

export function AlertCard({ title, value, icon, color = "text-gray-700" }: AlertCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
      </div>
      {icon && <div className="text-2xl">{icon}</div>}
    </div>
  );
}
