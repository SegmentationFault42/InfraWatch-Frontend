// AlertRow.tsx
import { ShieldAlert, AlertTriangle, ShieldCheck, Clock } from "lucide-react";

interface AlertRowProps {
  system: string;
  type: "critical" | "warning" | "resolved";
  description: string;
  date: string;
  state: "pendente" | "resolvido";
}

export function AlertRow({ system, type, description, date, state }: AlertRowProps) {
  const typeIcon = {
    critical: <ShieldAlert size={20} className="text-red-700" />,
    warning: <AlertTriangle size={20} className="text-yellow-500" />,
    resolved: <ShieldCheck size={20} className="text-green-700" />,
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="py-3 px-4 text-gray-900 font-medium">{system}</td>
      <td className="py-3 px-4 flex justify-center items-center">{typeIcon[type]}</td>
      <td className="py-3 px-4 text-gray-800">{description}</td>
      <td className="py-3 px-4 text-gray-800">{date}</td>
      <td className="py-3 px-4">
        {state === "pendente" ? (
          <div className="flex items-center gap-2 text-gray-400 text-sm justify-center">
            <Clock size={16} /> Pendente
          </div>
        ) : (
          <div className="flex items-center gap-2 text-black text-sm justify-center">
            <ShieldCheck size={16} /> Resolvido
          </div>
        )}
      </td>
    </tr>
  );
}
