import { SlidersHorizontal, ArrowDown, ArrowUp } from "lucide-react";

export function SystemTable() {
  const systems = [
    { name: "Sistema 1", cpu: "60%", ram: "22%", gpu: "100%", net: "10mb/s", status: "up" },
    { name: "Sistema 2", cpu: "40%", ram: "10%", gpu: "95%", net: "95mb/s", status: "down" },
    { name: "Sistema 3", cpu: "20%", ram: "5%", gpu: "89%", net: "89mb/s", status: "down" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-base text-gray-900">Sistemas</h3>
        <button className="flex items-center gap-2 text-[13px] text-[var(--color-primary)] font-semibold px-3 py-1.5 bg-[var(--color-background)] rounded-md hover:bg-gray-100 transition">
          Filtrar
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-200">
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
            <tr
              key={s.name}
              className={`${
                idx !== systems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <td className="py-3 font-medium text-gray-900">{s.name}</td>
              <td className="py-3 text-gray-800">{s.cpu}</td>
              <td className="py-3 text-gray-800">{s.ram}</td>
              <td className="py-3 text-gray-800">{s.gpu}</td>
              <td className="py-3 text-gray-900 font-semibold">{s.net}</td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 ${
                    s.status === "up"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  } rounded-sm`}
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
