import SystemLayout from "../layouts/SystemLayout";
import { StatCard } from "../components/StatCard";
import { SystemCard } from "../components/SystemCard";
import { Button } from "../components/Button";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export function System() {
  return (
    <SystemLayout>
      <div className="space-y-6">
        {/* estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Sistemas Cadastrados" value="856" subtitle="Total de Sistemas em gerenciamento" color="blue" />
          <StatCard title="Sistemas em atividade" value="856" subtitle="Total de Sistemas em gerenciamento" color="green" />
          <StatCard title="Sistemas em mau funcionamento" value="856" subtitle="Total de Sistemas em gerenciamento" color="red" />
        </div>

        {/* ação + search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Button className="!w-auto !px-4 !py-2 !rounded-md !bg-[#5b3cc4] !text-white hover:bg-[#4a2ea1]">
            Cadastrar um novo sistema
          </Button>

          <div className="flex-1 md:max-w-xl relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar sistemas por nome ou url..."
              className="w-full pl-10 pr-12 py-2 bg-white border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-md bg-gray-100 border border-gray-200">
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SystemCard title="Site institucional" status="down" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="warning" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
          <SystemCard title="Site institucional" status="up" host="192.168.18.1" lastCheck="há 50 segundos" />
        </div>

        {/* paginação */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Página 1 de 100</p>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white border border-gray-200 rounded-md"><ChevronLeft size={16} /></button>
            <button className="p-2 bg-white border border-gray-200 rounded-md"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </SystemLayout>
  );
}
