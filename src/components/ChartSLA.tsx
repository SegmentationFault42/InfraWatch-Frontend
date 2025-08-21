export function ChartSLA() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">SLA (Nível de Prioridade/Incidentes)</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm">Alta</p>
          <div className="w-full h-2 bg-red-100 rounded">
            <div className="h-2 bg-red-500 w-[14%] rounded"></div>
          </div>
        </div>
        <div>
          <p className="text-sm">Média</p>
          <div className="w-full h-2 bg-yellow-100 rounded">
            <div className="h-2 bg-yellow-500 w-[14%] rounded"></div>
          </div>
        </div>
        <div>
          <p className="text-sm">Baixa</p>
          <div className="w-full h-2 bg-blue-100 rounded">
            <div className="h-2 bg-blue-500 w-[14%] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
