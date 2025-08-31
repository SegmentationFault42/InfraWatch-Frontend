import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

// Paleta de cores
const colors = {
  bg: "bg-white",
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  textMuted: "text-gray-500",
  rowHover: "hover:bg-gray-50",
  border: "border-gray-200",
  buttonBg: "bg-gray-100",
  buttonHoverBg: "hover:bg-[var(--color-primary)]",
  buttonHoverText: "hover:text-white",
  footerBg: "bg-gray-50",
};

interface LogTableProps {
  data: { logNumber: string; date: string; system: string }[];
}

export function LogTable({ data }: LogTableProps) {
  return (
    <div className={`${colors.bg} shadow-md rounded-xl overflow-hidden w-full max-w-8xl mx-auto mt-6`}>
      <table className="w-full text-sm">
        <thead className={`${colors.bg} shadow`}>
          <tr className="text-left text-[var(--color-primary)] font-semibold text-sm shadow-sm">
            <th className="py-3 px-4">Log Nº</th>
            <th className="py-3 px-4">Data</th>
            <th className="py-3 px-4">Sistema</th>
            <th className="py-3 px-4 text-center">Detalhes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((log, i) => (
            <tr key={i} className={`${colors.rowHover}`}>
              <td className={`py-3 px-4 font-medium ${colors.textPrimary}`}>{log.logNumber}</td>
              <td className={`py-3 px-4 ${colors.textSecondary}`}>{log.date}</td>
              <td className={`py-3 px-4 ${colors.textSecondary}`}>{log.system}</td>
              <td className="py-3 px-4 text-center">
                <button className={`p-2 rounded-lg ${colors.buttonBg} ${colors.buttonHoverBg} ${colors.buttonHoverText} transition`}>
                  <Eye size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`flex items-center justify-between mt-4 px-4 py-2 ${colors.footerBg} rounded-b-lg`}>
        <p className={`text-sm ${colors.textMuted}`}>Página 1 de 100</p>
        <div className="flex items-center gap-2">
          <button className={`p-2 ${colors.bg} border ${colors.border} rounded-md hover:bg-gray-50`}>
            <ChevronLeft size={16} />
          </button>
          <button className={`p-2 ${colors.bg} border ${colors.border} rounded-md hover:bg-gray-50`}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
