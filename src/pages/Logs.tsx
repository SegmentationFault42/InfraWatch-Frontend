import { AppLayout } from "../layouts/AppLayout";
import { StatCard } from "../components/StatCard";
import { LogTable } from "../components/LogTable";

export function Logs() {
  const mockData = [
    { logNumber: "001", date: "01/08/2025", system: "Sistema A" },
    { logNumber: "002", date: "02/08/2025", system: "Sistema B" },
    { logNumber: "003", date: "03/08/2025", system: "Sistema C" },
    { logNumber: "004", date: "04/08/2025", system: "Sistema A" },
    { logNumber: "005", date: "05/08/2025", system: "Sistema B" },
    { logNumber: "006", date: "06/08/2025", system: "Sistema C" },
    { logNumber: "007", date: "07/08/2025", system: "Sistema A" },
    { logNumber: "008", date: "08/08/2025", system: "Sistema B" },
    { logNumber: "009", date: "09/08/2025", system: "Sistema C" },
    { logNumber: "010", date: "10/08/2025", system: "Sistema A" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Logs Registrados"
            value={mockData.length.toString()}
            subtitle="Total de logs registados"
            color="blue"
          />
          <StatCard
            title="Ultimo registo"
            value="20h"
            subtitle="Logs registados"
            color="blue"
          />
        </div>

        <LogTable data={mockData} />
      </div>
    </AppLayout>
  );
}
