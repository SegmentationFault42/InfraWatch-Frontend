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
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Relatório Mensal</h3>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-sm bg-[#E0D9FB]"></span>
              <span>Down</span>
            </div>
            <div className="flex items-center gap-1 ml-4">
              <span className="w-3 h-3 rounded-sm bg-[#3C2E6C]"></span>
              <span>Up</span>
            </div>
          </div>

          <button className="flex items-center px-3 py-1 rounded-md bg-gray-100 text-sm font-semibold text-[var(--color-primary)]">
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
                backgroundColor: "#3C2E6C",
                borderRadius: "8px",
                color: "#FFB",
                border: "none",
              }}
            />
            <Bar
              dataKey="total"
              fill="#3C2E6C"
              radius={[6, 6, 0, 0]}
              barSize={52}
              stackId="a"
            />
            <Bar
              dataKey="parcial"
              fill="#f4f0fa"
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
