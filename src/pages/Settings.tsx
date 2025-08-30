import { SettingsCard } from "../components/SettingsCard";
import { SettingsLayout } from "../layouts/SettingsLayout";

export function Settings() {
  return (
    <SettingsLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-500 text-sm">Gerencie preferências do sistema</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <SettingsCard
            title="Perfil"
            subtitle="Gerencie suas informações pessoais"
            icon="perfil"
          />
          <SettingsCard
            title="Aparência"
            subtitle="Personalize o visual do sistema"
            icon="aparencia"
          />
          <SettingsCard
            title="Segurança"
            subtitle="Proteja sua conta e dados"
            icon="seguranca"
          />
        </div>
      </div>
    </SettingsLayout>
  );
}
