import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react";

// Paleta de cores
const colors = {
  bg: "bg-white",
  title: "text-gray-800",
  text: "text-gray-700",
  downBar: "#E0D9FB",
  upBar: "#3C2E6C",
  parcialBar: "#f4f0fa",
  tooltipBg: "#3C2E6C",
  tooltipText: "#FFB",
  btnBg: "bg-gray-100",
  btnText: "text-[var(--color-primary)]",
};

const data = [
  { name: "Jan", total: 78, parcial: 60 },
  { name: "Feb", total: 70, parcial: 50 },
  { name: "Mar", total: 92, parcial: 65 },
  { name: "Apr", total: 70, parcial: 45 },
  { name: "May", total: 96, parcial: 60 },
  { name: "Jun", total: 89, parcial: 58 },
  { name: "Jul", total: 100, parcial: 68 },
  { name: "Aug", total: 90, parcial: 62 },
];

export function ChartMonthly() {
  return (
    <div className={`${colors.bg} p-4 rounded-xl shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`font-semibold ${colors.title}`}>Relatório Mensal</h3>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.downBar }}></span>
              <span>Down</span>
            </div>
            <div className="flex items-center gap-1 ml-4">
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.upBar }}></span>
              <span>Up</span>
            </div>
          </div>

          <button className={`flex items-center px-3 py-1 rounded-md ${colors.btnBg} text-sm font-semibold ${colors.btnText}`}>
            Este mês
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.tooltipBg,
                borderRadius: "8px",
                color: colors.tooltipText,
                border: "none",
              }}
            />
            <Bar
              dataKey="total"
              fill={colors.upBar}
              radius={[6, 6, 0, 0]}
              barSize={52}
              stackId="a"
            />
            <Bar
              dataKey="parcial"
              fill={colors.parcialBar}
              radius={[6, 6, 0, 0]}
              barSize={52}
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
