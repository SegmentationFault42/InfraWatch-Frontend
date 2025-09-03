// src/components/SecurityModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useProfile } from "../hooks/useProfile";

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

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  const { updatePassword } = useProfile();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await updatePassword({
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      });
      alert("Senha alterada com sucesso!");
      onClose();
      setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao alterar a senha");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Fundo escuro */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`${colors.overlayBg} backdrop-blur-sm fixed inset-0`} />
        </Transition.Child>

        {/* Conteúdo do modal */}
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
            <Dialog.Panel className={`w-full max-w-md rounded-2xl ${colors.modalBg} p-6 shadow-2xl border ${colors.border}`}>
              <Dialog.Title className={`text-xl font-bold ${colors.title} mb-6 text-center`}>
                Alterar Senha
              </Dialog.Title>

              <div className="space-y-5">
                {["oldPassword", "newPassword", "confirmPassword"].map((field, idx) => (
                  <input
                    key={idx}
                    type="password"
                    placeholder={
                      field === "oldPassword"
                        ? "Senha antiga"
                        : field === "newPassword"
                        ? "Nova senha"
                        : "Confirme a nova senha"
                    }
                    value={(formData as any)[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className={`w-full rounded-lg border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} shadow-sm focus:outline-none ${colors.focusBorder} ${colors.focusRing} px-4 py-3 transition duration-300 hover:brightness-105`}
                  />
                ))}
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <div className="flex gap-4 pt-8">
                <button
                  onClick={onClose}
                  className={`flex-1 py-3 rounded-lg border ${colors.secondary} font-medium ${colors.secondaryHover} transition duration-300`}
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className={`flex-1 py-3 rounded-lg border border-white ${colors.primary} font-medium ${colors.primaryHover} shadow transition duration-300`}
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Guardar"}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
