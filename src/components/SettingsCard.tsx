import { User, Palette, Shield } from "lucide-react";

// Paleta de cores
const colors = {
  cardBg: "bg-white",
  cardShadow: "shadow-md",
  cardHover: "hover:shadow-lg",
  title: "text-gray-900",
  subtitle: "text-gray-500",
  icon: "text-violet-600",
};

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
    perfil: <User size={28} className={colors.icon} />,
    aparencia: <Palette size={28} className={colors.icon} />,
    seguranca: <Shield size={28} className={colors.icon} />,
  };

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? title : undefined}
      className={`p-6 ${colors.cardBg} rounded-2xl ${colors.cardShadow} ${colors.cardHover} transition duration-300 cursor-pointer`}
    >
      <div className="flex items-center gap-3">
        {icons[icon]}
        <div>
          <h3 className={`font-semibold ${colors.title}`}>{title}</h3>
          <p className={`text-sm ${colors.subtitle}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
