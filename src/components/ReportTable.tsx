import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReportTableProps {
  data: { reportNumber: string; date: string; period: string }[];
}

export function ReportTable({ data }: ReportTableProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-8xl mx-auto mt-6">
      <table className="w-full text-sm border-separate border-spacing-0">
        <thead className="">
          <tr className="text-left text-[var(--color-primary)] font-semibold text-sm bg-gray-100 shadow-sm">
            <th className="py-3 px-4 rounded-tl-lg">Relatório Nº</th>
            <th className="py-3 px-4">Data</th>
            <th className="py-3 px-4 rounded-tr-lg">Período</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((report, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="py-3 px-4 font-medium text-gray-900">{report.reportNumber}</td>
              <td className="py-3 px-4 text-gray-700">{report.date}</td>
              <td className="py-3 px-4 text-gray-700">{report.period}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4 px-4 py-2 bg-gray-50 rounded-b-lg">
        <p className="text-sm text-gray-500">Página 1 de 100</p>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition">
            <ChevronLeft size={16} />
          </button>
          <button className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
