import { SlaLayout } from "../layouts/SlaLayout";
import { StatCard } from "../components/StatCard";
import { Button } from "../components/Button";

export function Sla() {
  return (
    <SlaLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Uptime Geral"
            value="99.8%"
            subtitle="Disponibilidade dos sistemas"
            color="green"
          />
          <StatCard
            title="Indisponibilidade dos sistemas"
            value="25%"
            subtitle="Inatividade do sistema"
            color="red"
          />
          <StatCard
            title="Numero de incidentes registados"
            value="10"
            subtitle="Serviços aguardando resolução"
            color="yellow"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Button className="!w-auto !px-5 !py-2.5 !rounded-md !bg-[#5b3cc4] !text-white shadow hover:bg-[#4a2ea1]">
            Configurar o SLA do sistema
          </Button>
        </div>
      </div>
    </SlaLayout>
  );
}
