import { X } from "lucide-react";

// Paleta de cores
const colors = {
  overlayBg: "bg-black/40",
  modalBg: "bg-white",
  closeText: "text-gray-400",
  closeHover: "hover:text-gray-600",
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${colors.overlayBg}`}>
      <div className={`rounded-2xl shadow-xl w-full max-w-3xl p-6 relative ${colors.modalBg}`}>
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 ${colors.closeText} ${colors.closeHover}`}
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
