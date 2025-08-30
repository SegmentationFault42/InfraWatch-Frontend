import { User, Palette, Shield } from "lucide-react";

interface SettingsCardProps {
  title: string;
  subtitle: string;
  icon: "perfil" | "aparencia" | "seguranca";
}

export function SettingsCard({ title, subtitle, icon }: SettingsCardProps) {
  const icons = {
    perfil: <User className="w-6 h-6 text-[var(--color-primary)]" />,
    aparencia: <Palette className="w-6 h-6 text-[var(--color-primary)]" />,
    seguranca: <Shield className="w-6 h-6 text-[var(--color-primary)]" />,
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-start gap-4 p-5">
        <div className="flex-shrink-0 p-3 bg-[var(--color-primary-light)] rounded-xl">
          {icons[icon]}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
