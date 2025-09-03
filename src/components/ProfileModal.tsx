import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { useProfile } from "../hooks/useProfile";

// Paleta de cores
const colors = {
  overlayBg: "bg-black/40",
  modalBg: "bg-white",
  border: "border-gray-200",
  title: "text-gray-900",
  label: "text-gray-600",
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

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, update, loading, error } = useProfile();

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profileImageUrl, setProfileImageUrl] = useState(user?.profileImageUrl || "");

  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setProfileImageUrl(user.profileImageUrl || "");
    }
  }, [user]);

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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await update({ firstName, lastName, email, profileImageUrl });
      alert("Perfil atualizado com sucesso!");
      onClose();
    } catch (err) {
      console.error(err);
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
            <Dialog.Panel className={`w-full max-w-2xl rounded-2xl ${colors.modalBg} p-6 shadow-2xl border ${colors.border}`}>
              <Dialog.Title className={`text-xl font-bold ${colors.title} mb-4`}>
                Perfil do Usuário
              </Dialog.Title>

              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Lado esquerdo - Imagem */}
                <div className="flex justify-center md:w-1/3">
                  <div className="relative group cursor-pointer" onClick={handleIconClick}>
                    <img
                      src={profileImageUrl || "https://images5.alphacoders.com/134/1345309.jpeg"}
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
                        const fileUrl = URL.createObjectURL(e.target.files[0]);
                        setProfileImageUrl(fileUrl);
                        console.log("Arquivo selecionado:", e.target.files[0]);
                      }
                    }}
                  />
                </div>

                {/* Lado direito - Formulário */}
                <div className="flex-1 space-y-5">
                  {[
                    { label: "Nome", value: firstName, setValue: setFirstName },
                    { label: "Sobrenome", value: lastName, setValue: setLastName },
                    { label: "Email", value: email, setValue: setEmail, type: "email" },
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className={`block text-sm font-medium ${colors.label} mb-1`}>
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        placeholder={`Digite seu ${field.label.toLowerCase()}`}
                        value={field.value}
                        onChange={(e) => field.setValue(e.target.value)}
                        className={`w-full rounded-lg border ${colors.border} ${colors.inputBg} ${colors.inputText} ${colors.placeholder} shadow-sm focus:outline-none ${colors.focusBorder} ${colors.focusRing} px-3 py-2 transition`}
                      />
                    </div>
                  ))}

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <div className="flex gap-4 pt-6">
                    <button
                      type="button"
                      onClick={handleSave}
                      className={`flex-1 py-2 rounded-lg border border-white ${colors.primary} font-medium ${colors.primaryHover} transition`}
                      disabled={loading}
                    >
                      {loading ? "Atualizando..." : "Atualizar"}
                    </button>
                    <button
                      onClick={onClose}
                      className={`flex-1 py-2 rounded-lg border ${colors.secondary} font-medium ${colors.secondaryHover} transition`}
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
