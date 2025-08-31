// Report.tsx
import { useState } from "react";
import { AppLayout } from "../layouts/AppLayout";
import { StatCard } from "../components/StatCard";
import { DateRangePicker } from "../components/DateRangePicker";
import { ReportTable } from "../components/ReportTable";

export function Report() {
  const [startDate, setStartDate] = useState("2025-08-01");
  const [endDate, setEndDate] = useState("2025-08-31");

  const mockData = [
    { reportNumber: "001", date: "01/08/2025", period: "01/08/2025 - 07/08/2025" },
    { reportNumber: "002", date: "08/08/2025", period: "08/08/2025 - 14/08/2025" },
    { reportNumber: "003", date: "15/08/2025", period: "15/08/2025 - 21/08/2025" },
    { reportNumber: "004", date: "22/08/2025", period: "22/08/2025 - 28/08/2025" },
    { reportNumber: "005", date: "29/08/2025", period: "29/08/2025 - 31/08/2025" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Generated Reports"
            value="125"
            subtitle="Total de relatórios de trabalho gerados"
            color="blue"
          />
        </div>

        {/* Date picker + botão */}
        <div className="w-full">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartChange={setStartDate}
            onEndChange={setEndDate}
            onGenerate={() =>
              alert(`Gerando relatório de ${startDate} até ${endDate}`)
            }
          />
        </div>

        {/* Tabela */}
        <ReportTable data={mockData} />
      </div>
    </AppLayout>
  );
}
