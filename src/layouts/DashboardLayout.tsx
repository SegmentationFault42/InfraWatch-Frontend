import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header fixo no topo */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar inicia abaixo do header */}
        <Sidebar />

        {/* Conteúdo principal, scroll vertical */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
