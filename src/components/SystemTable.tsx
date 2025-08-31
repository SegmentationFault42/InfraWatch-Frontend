import { SlidersHorizontal, ArrowDown, ArrowUp } from "lucide-react";

// Paleta de cores
const colors = {
  cardBg: "bg-white",
  cardShadow: "shadow",
  border: "border-gray-200",
  textTitle: "text-gray-900",
  textBody: "text-gray-800",
  textHighlight: "text-gray-900 font-semibold",
  buttonBg: "bg-[var(--color-background)]",
  buttonText: "text-[var(--color-primary)]",
  buttonHover: "hover:bg-gray-100",
  status: {
    up: { bg: "bg-green-100", text: "text-green-600" },
    down: { bg: "bg-red-100", text: "text-red-600" },
  },
} as const;

// Define tipo exato do status
type SystemStatus = keyof typeof colors.status;

type System = {
  name: string;
  cpu: string;
  ram: string;
  gpu: string;
  net: string;
  status: SystemStatus;
};

export function SystemTable() {
  const systems: System[] = [
    { name: "Sistema 1", cpu: "60%", ram: "22%", gpu: "100%", net: "10mb/s", status: "up" },
    { name: "Sistema 2", cpu: "40%", ram: "10%", gpu: "95%", net: "95mb/s", status: "down" },
    { name: "Sistema 3", cpu: "20%", ram: "5%", gpu: "89%", net: "89mb/s", status: "down" },
  ];

  return (
    <div className={`${colors.cardBg} p-6 rounded-xl ${colors.cardShadow} mb-6`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`font-semibold text-base ${colors.textTitle}`}>Sistemas</h3>
        <button className={`flex items-center gap-2 text-[13px] font-semibold px-3 py-1.5 ${colors.buttonText} ${colors.buttonBg} rounded-md ${colors.buttonHover} transition`}>
          Filtrar
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className={`text-left text-gray-500 border-b ${colors.border}`}>
            <th className="py-2 font-medium">Nome</th>
            <th className="py-2 font-medium">CPU</th>
            <th className="py-2 font-medium">RAM</th>
            <th className="py-2 font-medium">GPU</th>
            <th className="py-2 font-medium">Internet</th>
            <th className="py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {systems.map((s, idx) => (
            <tr key={s.name} className={`${idx !== systems.length - 1 ? `border-b border-gray-100` : ""}`}>
              <td className={`py-3 font-medium ${colors.textBody}`}>{s.name}</td>
              <td className={`py-3 ${colors.textBody}`}>{s.cpu}</td>
              <td className={`py-3 ${colors.textBody}`}>{s.ram}</td>
              <td className={`py-3 ${colors.textBody}`}>{s.gpu}</td>
              <td className={`py-3 ${colors.textHighlight}`}>{s.net}</td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 ${colors.status[s.status].bg} ${colors.status[s.status].text} rounded-sm`}
                >
                  {s.status === "up" ? (
                    <ArrowUp className="w-5 h-5" />
                  ) : (
                    <ArrowDown className="w-5 h-5" />
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
