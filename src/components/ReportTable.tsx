// src/components/ReportTable.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

// Paleta de cores
const colors = {
  tableBg: "bg-white",
  tableBorder: "divide-gray-100",
  headerBg: "bg-[#f5f3ff]", // lilás suave
  headerText: "text-[#7c3aed]", // violeta vibrante
  rowHover: "hover:bg-[#ede9fe]",
  textPrimary: "text-gray-800",
  textSecondary: "text-gray-600",
  paginationBg: "bg-[#f5f3ff]",
  paginationText: "text-gray-500",
  buttonBg: "bg-white",
  buttonBorder: "border-gray-200",
  buttonHover: "hover:bg-[#ede9fe]",
};

interface ReportTableProps {
  data: { reportNumber: string; date: string; period: string }[];
}

export function ReportTable({ data }: ReportTableProps) {
  return (
    <div className={`${colors.tableBg} shadow-md rounded-xl overflow-hidden w-full max-w-8xl mx-auto mt-6`}>
      <table className="w-full text-sm border-separate border-spacing-0">
        <thead>
          <tr className={`${colors.headerBg} ${colors.headerText} text-left font-semibold text-sm shadow-sm`}>
            <th className="py-3 px-4 rounded-tl-lg">Relatório Nº</th>
            <th className="py-3 px-4">Data</th>
            <th className="py-3 px-4 rounded-tr-lg">Período</th>
          </tr>
        </thead>

        <tbody className={colors.tableBorder}>
          {data.map((report, i) => (
            <tr
              key={i}
              className={`${colors.rowHover} transition-colors duration-200`}
            >
              <td className={`py-3 px-4 font-medium ${colors.textPrimary}`}>{report.reportNumber}</td>
              <td className={`py-3 px-4 ${colors.textSecondary}`}>{report.date}</td>
              <td className={`py-3 px-4 ${colors.textSecondary}`}>{report.period}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`flex items-center justify-between mt-4 px-4 py-2 ${colors.paginationBg} rounded-b-lg`}>
        <p className={`${colors.paginationText} text-sm`}>Página 1 de 100</p>
        <div className="flex items-center gap-2">
          <button className={`p-2 ${colors.buttonBg} border ${colors.buttonBorder} rounded-md ${colors.buttonHover} transition`}>
            <ChevronLeft size={16} />
          </button>
          <button className={`p-2 ${colors.buttonBg} border ${colors.buttonBorder} rounded-md ${colors.buttonHover} transition`}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
