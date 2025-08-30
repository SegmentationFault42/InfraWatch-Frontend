import { AlertRow } from "./AlertRow";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

interface AlertTableProps {
  data: any[];
}

export function AlertTable({ data }: AlertTableProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-8xl mx-auto mt-6">
      <table className="w-full text-sm">
        <thead className="bg-white shadow">
          <tr className="text-left text-[var(--color-primary)] font-semibold text-sm shadow-sm">
            <th className="py-3 px-4">Sistema</th>
            <th className="py-3 px-4 text-center">Tipo de Alerta</th>
            <th className="py-3 px-4">Descrição do Alerta</th>
            <th className="py-3 px-4">Data de registro</th>
            <th className="py-3 px-4">Estado</th>
          </tr>
          <tr>
            <th colSpan={5} className="px-4 py-3">
              <div className="flex w-full">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pesquisar por sistemas, alertas, relatórios..."
                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 rounded-l-md focus:outline-none placeholder-gray-400 font-normal"
                  />
                </div>
                <button className="flex items-center gap-2 text-[13px] text-[var(--color-primary)] font-semibold px-3 py-2 bg-gray-100 rounded-r-md hover:bg-gray-200 transition">
                  Filtrar
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((alert, i) => (
            <AlertRow key={i} {...alert} />
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4 px-4 py-2 bg-gray-50 rounded-b-lg">
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
  );
}
