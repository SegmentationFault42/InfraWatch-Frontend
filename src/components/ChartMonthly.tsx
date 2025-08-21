import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function ChartMonthly() {
  const data = [
    { name: "Jan", value: 77 },
    { name: "Feb", value: 65 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 72 },
    { name: "May", value: 90 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Relatório Mensal</h3>
      <div className="h-64">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3C2E6C" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
