// Paleta de cores
const colors = {
  bg: "bg-white",
  title: "text-gray-800",
  subtitle: "text-gray-500",
  barBg: "bg-gray-200",
  high: "bg-red-600",
  medium: "bg-yellow-400",
  low: "bg-blue-600",
};

export function ChartSLA() {
  return (
    <div className={`${colors.bg} p-4 rounded-xl shadow`}>
      <h3 className={`font-semibold mb-4 ${colors.title}`}>
        SLA (Nível de Prioridade/Incidentes)
      </h3>
      <div className="space-y-4">
        <div>
          <p className={`text-sm mb-1 ${colors.title}`}>Alta</p>
          <div className="flex items-center justify-between gap-2">
            <div className={`w-full h-3 ${colors.barBg} rounded-full overflow-hidden`}>
              <div className={`h-3 ${colors.high} rounded-full w-[10%]`}></div>
            </div>
            <span className={`text-sm ${colors.subtitle} w-5 text-right`}>14%</span>
          </div>
        </div>

        <div>
          <p className={`text-sm mb-1 ${colors.title}`}>Média</p>
          <div className="flex items-center justify-between gap-2">
            <div className={`w-full h-3 ${colors.barBg} rounded-full overflow-hidden`}>
              <div className={`h-3 ${colors.medium} rounded-full w-[10%]`}></div>
            </div>
            <span className={`text-sm ${colors.subtitle} w-5 text-right`}>14%</span>
          </div>
        </div>

        <div>
          <p className={`text-sm mb-1 ${colors.title}`}>Baixa</p>
          <div className="flex items-center justify-between gap-2">
            <div className={`w-full h-3 ${colors.barBg} rounded-full overflow-hidden`}>
              <div className={`h-3 ${colors.low} rounded-full w-[10%]`}></div>
            </div>
            <span className={`text-sm ${colors.subtitle} w-5 text-right`}>14%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
