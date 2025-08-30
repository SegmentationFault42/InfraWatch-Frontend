import SystemLayout from "../layouts/SystemLayout";
import { StatCard } from "../components/StatCard";
import { SystemCard } from "../components/SystemCard";
import { Button } from "../components/Button";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export function System() {
  return (
    <SystemLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Sistemas Cadastrados" value="856" subtitle="Total de Sistemas em gerenciamento" color="blue" />
          <StatCard title="Sistemas em atividade" value="856" subtitle="Total de Sistemas em gerenciamento" color="green" />
          <StatCard title="Sistemas em mau funcionamento" value="856" subtitle="Total de Sistemas em gerenciamento" color="red" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Button className="!w-auto !px-5 !py-2.5 !rounded-md !bg-[#5b3cc4] !text-white shadow hover:bg-[#4a2ea1]">
            Cadastrar um novo sistema
          </Button>

          <div className="flex-1 md:max-w-xl flex rounded-md overflow-hidden bg-gray-100">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar sistemas por nome ou url..."
                className="w-full pl-10 pr-3 py-2 bg-gray-100 text-sm placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button className="px-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200">
              <SlidersHorizontal size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SystemCard title="Site institucional" status="down" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="warning" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Página 1 de 100</p>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>
            <button className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
}
