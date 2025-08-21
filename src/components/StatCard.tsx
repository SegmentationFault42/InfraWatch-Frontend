type Props = {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  color?: "green" | "yellow" | "blue" | "red";
};

export function StatCard({ title, value, subtitle, trend, color = "blue" }: Props) {
  const colors: Record<string, string> = {
    green: "text-green-600",
    yellow: "text-yellow-600",
    blue: "text-blue-600",
    red: "text-red-600",
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      {trend && <p className={`text-xs ${colors[color]}`}>{trend}</p>}
    </div>
  );
}
