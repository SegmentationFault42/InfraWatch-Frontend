import { DashboardLayout } from "../layouts/DashboardLayout";
import { StatCard } from "../components/StatCard";
import { SystemTable } from "../components/SystemTable";
import { ChartSLA } from "../components/ChartSLA";
import { ChartIncidents } from "../components/ChartIncidents";
import { ChartMonthly } from "../components/ChartMonthly";

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Sistemas ativos" value="856" trend="+10%" color="green" />
        <StatCard title="Alertas" value="8" subtitle="2 Críticos • 10 Avisos" color="yellow" />
        <StatCard title="Incidentes resolvidos" value="450" trend="+5%" color="blue" />
      </div>

      <SystemTable />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <ChartSLA />
        <ChartIncidents />
      </div>

      <ChartMonthly />
    </DashboardLayout>
  );
}
