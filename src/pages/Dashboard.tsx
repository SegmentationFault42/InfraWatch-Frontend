import { AppLayout } from "../layouts/AppLayout";
import { StatCard } from "../components/StatCard";
import { SystemTable } from "../components/SystemTable";
import { ChartSLA } from "../components/ChartSLA";
import { ChartIncidents } from "../components/ChartIncidents";
import { ChartMonthly } from "../components/ChartMonthly";
import { ShieldAlert, AlertTriangle } from "lucide-react";

export function Dashboard() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Sistemas ativos"
          value="856"
          subtitle="Sistemas em funcionamento"
          trend="+10%"
          color="green"
        />

        <StatCard
          title="Alertas"
          value="8"
          subtitle="Serviços em estado de alerta"
          trend="+5%"
          color="yellow"
          customRightContent={
            <>
              <span className="flex items-center gap-1 text-red-700">
                <ShieldAlert size={24} />
                <span className="text-3xl font-bold">2</span>
              </span>
              <span className="flex items-center gap-1 text-yellow-500">
                <AlertTriangle size={24} />
                <span className="text-3xl font-bold">10</span>
              </span>
            </>
          }
        />

        <StatCard
          title="Incidentes resolvidos"
          value="450"
          subtitle="Histórico de resolução de problemas"
          trend="+5%"
          color="blue"
        />
      </div>

      <SystemTable />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <ChartSLA />
        <ChartIncidents />
      </div>

      <ChartMonthly />
    </AppLayout>
  );
}
