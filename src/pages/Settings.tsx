import { useState } from "react";
import { SettingsCard } from "../components/SettingsCard";
import { AppLayout } from "../layouts/AppLayout";
import { ProfileModal } from "../components/ProfileModal";
import { AppearanceModal } from "../components/AppearanceModal";
import { SecurityModal } from "../components/SecurityModal";

export function Settings() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openAppearance, setOpenAppearance] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-500 text-sm">Gerencie preferências do sistema</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <SettingsCard
            title="Perfil"
            subtitle="Gerencie suas informações pessoais"
            icon="perfil"
            onClick={() => setOpenProfile(true)}
          />
          <SettingsCard
            title="Aparência"
            subtitle="Personalize o visual do sistema"
            icon="aparencia"
            onClick={() => setOpenAppearance(true)}
          />
          <SettingsCard
            title="Segurança"
            subtitle="Proteja sua conta e dados"
            icon="seguranca"
            onClick={() => setOpenSecurity(true)}
          />
        </div>
      </div>

      {/* Modais */}
      <ProfileModal isOpen={openProfile} onClose={() => setOpenProfile(false)} />
      <AppearanceModal
        isOpen={openAppearance}
        onClose={() => setOpenAppearance(false)}
      />
      <SecurityModal
        isOpen={openSecurity}
        onClose={() => setOpenSecurity(false)}
      />
    </AppLayout>
  );
}
