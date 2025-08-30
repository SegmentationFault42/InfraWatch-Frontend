import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface LogTableProps {
  data: { logNumber: string; date: string; system: string }[];
}

export function LogTable({ data }: LogTableProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-8xl mx-auto mt-6">
      <table className="w-full text-sm">
        <thead className="bg-white shadow">
          <tr className="text-left text-[var(--color-primary)] font-semibold text-sm shadow-sm">
            <th className="py-3 px-4">Log Nº</th>
            <th className="py-3 px-4">Data</th>
            <th className="py-3 px-4">Sistema</th>
            <th className="py-3 px-4 text-center">Detalhes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((log, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium text-gray-900">{log.logNumber}</td>
              <td className="py-3 px-4 text-gray-700">{log.date}</td>
              <td className="py-3 px-4 text-gray-700">{log.system}</td>
              <td className="py-3 px-4 text-center">
                <button className="p-2 rounded-lg bg-gray-100 hover:bg-[var(--color-primary)] hover:text-white transition">
                  <Eye size={18} />
                </button>
              </td>
            </tr>
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
