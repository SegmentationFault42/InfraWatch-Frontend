import { ShieldAlert, AlertTriangle, ShieldCheck, Clock } from "lucide-react";

interface AlertRowProps {
  system: string;
  type: "critical" | "warning" | "resolved";
  description: string;
  date: string;
  state: "pendente" | "resolvido";
}

const colors = {
  critical: "text-red-700",
  warning: "text-yellow-500",
  resolved: "text-green-700",
  systemText: "text-gray-900",
  descriptionText: "text-gray-800",
  pendingText: "text-gray-400",
  resolvedText: "text-black",
  rowHover: "hover:bg-gray-50",
};

export function AlertRow({ system, type, description, date, state }: AlertRowProps) {
  const typeIcon = {
    critical: <ShieldAlert size={20} className={colors.critical} />,
    warning: <AlertTriangle size={20} className={colors.warning} />,
    resolved: <ShieldCheck size={20} className={colors.resolved} />,
  };

  return (
    <tr className={colors.rowHover}>
      <td className={`py-3 px-4 font-medium ${colors.systemText}`}>{system}</td>
      <td className="py-3 px-4 flex justify-center items-center">{typeIcon[type]}</td>
      <td className={`py-3 px-4 ${colors.descriptionText}`}>{description}</td>
      <td className={`py-3 px-4 ${colors.descriptionText}`}>{date}</td>
      <td className="py-3 px-4">
        {state === "pendente" ? (
          <div className={`flex items-center gap-2 text-sm justify-center ${colors.pendingText}`}>
            <Clock size={16} /> Pendente
          </div>
        ) : (
          <div className={`flex items-center gap-2 text-sm justify-center ${colors.resolvedText}`}>
            <ShieldCheck size={16} /> Resolvido
          </div>
        )}
      </td>
    </tr>
  );
}
