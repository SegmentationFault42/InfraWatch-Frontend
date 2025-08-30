import { User, Palette, Shield } from "lucide-react";

interface SettingsCardProps {
  title: string;
  subtitle: string;
  icon: "perfil" | "aparencia" | "seguranca";
  onClick?: () => void;
}

export function SettingsCard({
  title,
  subtitle,
  icon,
  onClick,
}: SettingsCardProps) {
  const icons = {
    perfil: <User size={28} className="text-violet-600" />,
    aparencia: <Palette size={28} className="text-violet-600" />,
    seguranca: <Shield size={28} className="text-violet-600" />,
  };

  return (
    <div
      onClick={onClick}
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {icons[icon]}
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
