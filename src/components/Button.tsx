type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

// Variáveis de cores
const colors = {
  bg: "bg-white",
  text: "text-primary",
  hoverScale: "hover:scale-102",
  hoverShadow: "hover:shadow-xl",
  transition: "transition-all duration-300 ease-out",
  rounded: "rounded-full",
  padding: "py-3 px-6",
  width: "w-full",
  font: "font-semibold",
};

export function Button({ children, onClick, type = "button", className = "" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${colors.width} ${colors.rounded} ${colors.bg} ${colors.text} ${colors.font} ${colors.padding}
        ${colors.hoverScale} ${colors.hoverShadow} ${colors.transition}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
