import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Paleta de cores
const colors = {
  bg: "bg-white",
  title: "text-gray-800",
  subtitle: "text-gray-500",
  resolved: "#0F5B8C",
  normal: "#FDE047",
  critical: "#EF4444",
};

export function ChartIncidents() {
  const data = [
    { name: "Resolvidos", value: 8, color: colors.resolved },
    { name: "Normal", value: 8, color: colors.normal },   
    { name: "Crítico", value: 8, color: colors.critical }, 
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={`${colors.bg} p-4 rounded-xl shadow`}>
      <h3 className={`font-semibold mb-4 ${colors.title}`}>Total de Incidentes</h3>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4 w-full md:w-1/2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className={`font-medium ${colors.title}`}>{item.value}</span>
              <span className={colors.subtitle}>{item.name}</span>
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
            <p className={`text-xl font-bold ${colors.title}`}>{total}</p>
            <p className={`text-sm ${colors.subtitle}`}>Este mês</p>
          </div>
        </div>
      </div>
    </div>
  );
}
