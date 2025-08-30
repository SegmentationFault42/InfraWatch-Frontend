export function ChartSLA() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">SLA (Nível de Prioridade/Incidentes)</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm mb-1">Alta</p>
          <div className="flex items-center justify-between gap-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-3 bg-red-600 rounded-full w-[10%]"></div>
            </div>
            <span className="text-sm text-gray-500 w-5 text-right">14%</span>
          </div>
        </div>

        <div>
          <p className="text-sm mb-1">Média</p>
          <div className="flex items-center justify-between gap-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-3 bg-yellow-400 rounded-full w-[10%]"></div>
            </div>
            <span className="text-sm text-gray-500 w-5 text-right">14%</span>
          </div>
        </div>

        <div>
          <p className="text-sm mb-1">Baixa</p>
          <div className="flex items-center justify-between gap-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-3 bg-blue-600 rounded-full w-[10%]"></div>
            </div>
            <span className="text-sm text-gray-500 w-5 text-right">14%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
