// src/components/ProfileModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState, useEffect } from "react";
import { Pencil } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
  });

  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    // Simulação de buscar dados do usuário
    setTimeout(() => {
      setFormData({
        nome: "Kanagi Kazuya",
        email: "kazuya@example.com",
        dataNascimento: "2000-05-15",
      });
    }, 500);
  }, []);

  const handleIconClick = () => {
    if (isMobile) {
      const choice = window.confirm(
        "Deseja tirar uma foto agora? (Cancelar = escolher da galeria)"
      );

      if (choice) {
        fileInputRef.current?.setAttribute("capture", "environment");
        fileInputRef.current?.click();
      } else {
        fileInputRef.current?.removeAttribute("capture");
        fileInputRef.current?.click();
      }
    } else {
      fileInputRef.current?.click();
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
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Conteúdo */}
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
            <Dialog.Panel className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
              <Dialog.Title className="text-xl font-bold text-gray-900 mb-4">
                Perfil do Usuário
              </Dialog.Title>

              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Lado esquerdo - Imagem */}
                <div className="flex justify-center md:w-1/3">
                  <div
                    className="relative group cursor-pointer"
                    onClick={handleIconClick}
                  >
                    <img
                      src="https://images5.alphacoders.com/134/1345309.jpeg"
                      alt="Foto de perfil"
                      className="w-40 h-40 rounded-full object-cover border-4 border-violet-500 transition duration-300 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <Pencil className="text-white w-7 h-7" />
                    </div>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        console.log("Arquivo selecionado:", e.target.files[0]);
                      }
                    }}
                  />
                </div>

                {/* Lado direito - Formulário */}
                <div className="flex-1 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-violet-500 focus:ring-violet-500 px-3 py-2 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Digite seu email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 shadow-sm focus:border-violet-500 focus:ring-violet-500 px-3 py-2 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Data de Nascimento
                    </label>
                    <input
                      type="date"
                      value={formData.dataNascimento}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dataNascimento: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-800 shadow-sm focus:border-violet-500 focus:ring-violet-500 px-3 py-2 transition"
                    />
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button className="flex-1 py-2 rounded-lg border border-white bg-violet-600 text-white font-medium hover:bg-violet-700 transition">
                      Atualizar
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 py-2 rounded-lg border border-violet-600 bg-white text-violet-600 font-medium hover:bg-gray-100 transition"
                    >
                      Descartar
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
