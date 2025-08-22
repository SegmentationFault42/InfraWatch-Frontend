import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function ChartIncidents() {
  const data = [
    { name: "Resolvidos", value: 8, color: "#0F5B8C" },
    { name: "Normal", value: 8, color: "#FDE047" },   
    { name: "Crítico", value: 8, color: "#EF4444" }, 
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Total de Incidentes</h3>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4 w-full md:w-1/2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-medium text-gray-800">{item.value}</span>
              <span className="text-gray-500">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 h-48 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-xl font-bold text-gray-800">{total}</p>
            <p className="text-sm text-gray-500">Este mês</p>
          </div>
        </div>
      </div>
    </div>
  );
}
