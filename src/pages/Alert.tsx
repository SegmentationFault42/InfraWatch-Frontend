import AlertLayout from "../layouts/AlertLayout";
import { AlertTable } from "../components/AlertTable";
import { StatCard } from "../components/StatCard";
import { ShieldAlert, AlertTriangle, ShieldCheck } from "lucide-react";

export function Alert() {
  const alertData = [
    { system: "Site Institucional", type: "critical", description: "Certificado SSL expirado", date: "21/08/2025", state: "pendente" },
    { system: "API de Pagamentos", type: "warning", description: "Latência alta na API", date: "21/08/2025", state: "pendente" },
    { system: "Banco de dados", type: "resolved", description: "Banco de dados inacessível", date: "21/08/2025", state: "resolvido" },
    { system: "Banco de dados", type: "resolved", description: "Banco de dados inacessível", date: "21/08/2025", state: "resolvido" },
    { system: "Banco de dados", type: "resolved", description: "Banco de dados inacessível", date: "21/08/2025", state: "resolvido" },
    { system: "Banco de dados", type: "resolved", description: "Banco de dados inacessível", date: "21/08/2025", state: "resolvido" },
    { system: "Banco de dados", type: "resolved", description: "Banco de dados inacessível", date: "21/08/2025", state: "resolvido" },
  ];

  return (
    <AlertLayout>
      <div className="space-y-6 w-full max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total de Alertas registados"
            value="856"
            subtitle="Total de sistema em gerenciamento"
            color="blue"
          />
          <StatCard
            title="Avisos"
            value="10"
            subtitle="Serviços em estado de alerta"
            color="yellow"
            customRightContent={
              <span className="flex items-center gap-1 text-yellow-500">
                <AlertTriangle size={30} />
              </span>
            }
          />
          <StatCard
            title="Criticos"
            value="5"
            subtitle="Serviços em estado de alerta"
            color="red"
            customRightContent={
              <span className="flex items-center gap-1 text-red-700">
                <ShieldAlert size={30} />
              </span>
            }
          />
          <StatCard
            title="Alertas resolvidos"
            value="50"
            subtitle="Serviços em estado de alerta"
            color="green"
            customRightContent={
              <span className="flex items-center gap-1 text-green-700">
                <ShieldCheck size={30} />
              </span>
            }
          />
        </div>

        {/* Tabela de alertas */}
        <AlertTable data={alertData} />
      </div>
    </AlertLayout>
  );
}
