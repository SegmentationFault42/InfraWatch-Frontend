// src/components/SecurityModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Senha antiga:", formData.oldPassword);
    console.log("Nova senha:", formData.newPassword);
    onClose();
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
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

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
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
              <Dialog.Title className="text-xl font-bold text-gray-900 mb-6 text-center">
                Alterar Senha
              </Dialog.Title>

              <div className="space-y-5">
                <input
                  type="password"
                  placeholder="Senha antiga"
                  value={formData.oldPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, oldPassword: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-violet-500 focus:ring-violet-500 px-4 py-3 transition duration-300 hover:brightness-105"
                />

                <input
                  type="password"
                  placeholder="Nova senha"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-violet-500 focus:ring-violet-500 px-4 py-3 transition duration-300 hover:brightness-105"
                />

                <input
                  type="password"
                  placeholder="Confirme a nova senha"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-violet-500 focus:ring-violet-500 px-4 py-3 transition duration-300 hover:brightness-105"
                />
              </div>

              <div className="flex gap-4 pt-8">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-lg border border-violet-600 bg-white text-violet-600 font-medium hover:bg-gray-100 transition duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 rounded-lg border border-white bg-violet-600 text-white font-medium hover:bg-violet-700 shadow transition duration-300"
                >
                  Guardar
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
