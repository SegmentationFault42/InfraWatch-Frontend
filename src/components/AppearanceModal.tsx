// src/components/AppearanceModal.tsx
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Globe, Sun, Moon, Laptop, Check, ChevronDown } from "lucide-react";

interface AppearanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppearanceModal({ isOpen, onClose }: AppearanceModalProps) {
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState("light");

  const handleSave = () => {
    console.log("Idioma:", language, "Tema:", theme);
    onClose();
  };

  // Linguagens de teste
  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "Inglês" },
    { code: "es", label: "Espanhol" },
    { code: "fr", label: "Francês" },
    { code: "de", label: "Alemão" },
    { code: "it", label: "Italiano" },
    { code: "jp", label: "Japonês" },
    { code: "cn", label: "Chinês" },
    { code: "ru", label: "Russo" },
    { code: "ar", label: "Árabe" },
    { code: "kr", label: "Coreano" },
    { code: "hi", label: "Hindi" },
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
              <Dialog.Title className="text-xl font-bold text-gray-900 mb-2">
                Aparência
              </Dialog.Title>
              <p className="text-sm text-gray-500 mb-6">
                Personalize o idioma e o tema da aplicação
              </p>

              {/* Idioma */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Idioma
                </label>
                <Listbox value={language} onChange={setLanguage}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
                      <span className="flex items-center gap-2 text-gray-700">
                        <Globe className="w-4 h-4 text-gray-500" />
                        {languages.find((l) => l.code === language)?.label}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm z-50">
                        {languages.map((lng) => (
                          <Listbox.Option
                            key={lng.code}
                            value={lng.code}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                active ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
                              }`
                            }
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {lng.label}
                                </span>
                                {selected && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                    <Check className="w-4 h-4" />
                                  </span>
                                )}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>

              {/* Tema */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-600 mb-3">
                  Tema
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition
                      ${
                        theme === "light"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-600 shadow-sm"
                          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <Sun className="w-4 h-4" /> Claro
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition
                      ${
                        theme === "dark"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-600 shadow-sm"
                          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <Moon className="w-4 h-4" /> Escuro
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("system")}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition
                      ${
                        theme === "system"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-600 shadow-sm"
                          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <Laptop className="w-4 h-4" /> Sistema
                  </button>
                </div>
              </div>

              {/* Botões */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow transition"
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
