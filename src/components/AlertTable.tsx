import { AlertRow } from "./AlertRow";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

interface AlertTableProps {
  data: any[];
}

// Variáveis de cores
const colors = {
  background: "bg-white",
  tableHeaderText: "text-[var(--color-primary)]",
  tableHeaderBg: "bg-white",
  inputBg: "bg-gray-100",
  inputPlaceholder: "placeholder-gray-400",
  buttonBg: "bg-gray-100",
  buttonHoverBg: "hover:bg-gray-200",
  paginationBg: "bg-gray-50",
  paginationText: "text-gray-500",
  paginationButtonBg: "bg-white",
  paginationButtonBorder: "border-gray-200",
  paginationButtonHover: "hover:bg-gray-50",
};

export function AlertTable({ data }: AlertTableProps) {
  return (
    <div className={`shadow-md rounded-xl overflow-hidden w-full max-w-8xl mx-auto mt-6 ${colors.background}`}>
      <table className="w-full text-sm">
        <thead className={`${colors.tableHeaderBg} shadow`}>
          <tr className={`text-left ${colors.tableHeaderText} font-semibold text-sm shadow-sm`}>
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
                  <Search
                    size={18}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400`}
                  />
                  <input
                    type="text"
                    placeholder="Pesquisar por sistemas, alertas, relatórios..."
                    className={`w-full pl-10 pr-3 py-2 text-sm ${colors.inputBg} rounded-l-md focus:outline-none ${colors.inputPlaceholder} font-normal`}
                  />
                </div>
                <button
                  className={`flex items-center gap-2 text-[13px] ${colors.tableHeaderText} font-semibold px-3 py-2 ${colors.buttonBg} rounded-r-md ${colors.buttonHoverBg} transition`}
                >
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

      <div className={`flex items-center justify-between mt-4 px-4 py-2 rounded-b-lg ${colors.paginationBg}`}>
        <p className={`text-sm ${colors.paginationText}`}>Página 1 de 100</p>
        <div className="flex items-center gap-2">
          <button className={`p-2 ${colors.paginationButtonBg} border ${colors.paginationButtonBorder} rounded-md ${colors.paginationButtonHover}`}>
            <ChevronLeft size={16} />
          </button>
          <button className={`p-2 ${colors.paginationButtonBg} border ${colors.paginationButtonBorder} rounded-md ${colors.paginationButtonHover}`}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
