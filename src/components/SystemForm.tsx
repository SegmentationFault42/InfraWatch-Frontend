// src/components/SystemForm.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// Paleta de cores
const colors = {
  overlayBg: "bg-black/40",
  modalBg: "bg-white",
  border: "border-gray-200",
  title: "text-gray-900",
  inputBg: "bg-gray-100",
  inputText: "text-gray-800",
  placeholder: "placeholder-gray-500",
  focusBorder: "focus:border-violet-500",
  focusRing: "focus:ring-violet-500",
  primary: "bg-violet-600 text-white",
  primaryHover: "hover:bg-violet-700",
  secondary: "bg-white text-violet-600 border-violet-600",
  secondaryHover: "hover:bg-gray-100",
};

interface SystemFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SystemForm({ isOpen, onClose }: SystemFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    host: "",
    alert_email: "",
    monitorType: "API",
    monitorInterval: 1,
    slaUptime: 100,
    slaMaxDowntime: 0,
    slaResponseTime: 1,
    slaWindow: "daily",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.host || !formData.alert_email) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.alert_email)) {
      alert("Insira um e-mail válido!");
      return;
    }

    const payload = {
      name: formData.name,
      host: formData.host,
      alert_email: formData.alert_email,
      monitors: [
        {
          type: formData.monitorType,
          config: { additionalProp1: {} },
          interval: formData.monitorInterval,
        },
      ],
      slaConfig: {
        uptimeTarget: formData.slaUptime,
        maxDowntime: formData.slaMaxDowntime,
        responseTimeTarget: formData.slaResponseTime,
        monitoringWindow: formData.slaWindow,
      },
    };

    console.log("Sistema cadastrado:", payload);
    alert("Sistema cadastrado com sucesso!");
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      host: "",
      alert_email: "",
      monitorType: "API",
      monitorInterval: 1,
      slaUptime: 100,
      slaMaxDowntime: 0,
      slaResponseTime: 1,
      slaWindow: "daily",
    });
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`${colors.overlayBg} fixed inset-0 backdrop-blur-sm`} />
        </Transition.Child>

        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-6 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-6 scale-95"
          >
            <Dialog.Panel className={`w-full max-w-2xl rounded-2xl ${colors.modalBg} p-6 shadow-2xl border ${colors.border}`}>
              <Dialog.Title className={`text-xl font-bold ${colors.title} mb-6 text-center`}>
                Cadastrar Sistema
              </Dialog.Title>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome do Sistema"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                />
                <input
                  type="text"
                  placeholder="Host"
                  value={formData.host}
                  onChange={(e) => setFormData({ ...formData, host: e.target.value })}
                  className={`w-full rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                />
                <input
                  type="email"
                  placeholder="E-mail de alerta"
                  value={formData.alert_email}
                  onChange={(e) => setFormData({ ...formData, alert_email: e.target.value })}
                  className={`w-full rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                />

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Tipo de Monitor"
                    value={formData.monitorType}
                    onChange={(e) => setFormData({ ...formData, monitorType: e.target.value })}
                    className={`flex-1 rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                  />
                  <input
                    type="number"
                    placeholder="Intervalo (min)"
                    value={formData.monitorInterval}
                    onChange={(e) => setFormData({ ...formData, monitorInterval: Number(e.target.value) })}
                    className={`w-full sm:w-32 rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Uptime Target (%)"
                    value={formData.slaUptime}
                    onChange={(e) => setFormData({ ...formData, slaUptime: Number(e.target.value) })}
                    className={`rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                  />
                  <input
                    type="number"
                    placeholder="Max Downtime (min)"
                    value={formData.slaMaxDowntime}
                    onChange={(e) => setFormData({ ...formData, slaMaxDowntime: Number(e.target.value) })}
                    className={`rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                  />
                  <input
                    type="number"
                    placeholder="Response Time Target (s)"
                    value={formData.slaResponseTime}
                    onChange={(e) => setFormData({ ...formData, slaResponseTime: Number(e.target.value) })}
                    className={`rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                  />
                  <select
                    value={formData.slaWindow}
                    onChange={(e) => setFormData({ ...formData, slaWindow: e.target.value })}
                    className={`rounded-lg px-4 py-3 transition duration-300 border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} focus:outline-none ${colors.focusBorder} ${colors.focusRing}`}
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                {/* Botões responsivos */}
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className={`flex-1 py-3 rounded-lg border ${colors.secondary} font-medium ${colors.secondaryHover} transition duration-300`}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 py-3 rounded-lg border border-white ${colors.primary} font-medium ${colors.primaryHover} shadow transition duration-300`}
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
