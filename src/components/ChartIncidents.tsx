import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function ChartIncidents() {
  const data = [
    { name: "Resolvidos", value: 8, color: "#10B981" },
    { name: "Normal", value: 8, color: "#F59E0B" },
    { name: "Crítico", value: 8, color: "#EF4444" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Total de Incidentes</h3>
      <div className="h-48">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={50} outerRadius={70}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
