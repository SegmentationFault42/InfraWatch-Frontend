export function SystemTable() {
  const systems = [
    { name: "Sistema 1", cpu: "60%", ram: "22%", gpu: "100%", net: "10mb/s", status: "up" },
    { name: "Sistema 2", cpu: "40%", ram: "10%", gpu: "95%", net: "95mb/s", status: "down" },
    { name: "Sistema 3", cpu: "20%", ram: "5%", gpu: "89%", net: "89mb/s", status: "down" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Sistemas</h3>
        <button className="text-sm text-gray-500">Filtrar</button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th>Nome</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>GPU</th>
            <th>Internet</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {systems.map((s) => (
            <tr key={s.name} className="border-t">
              <td>{s.name}</td>
              <td>{s.cpu}</td>
              <td>{s.ram}</td>
              <td>{s.gpu}</td>
              <td>{s.net}</td>
              <td>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    s.status === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {s.status === "up" ? "Ativo" : "Inativo"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
