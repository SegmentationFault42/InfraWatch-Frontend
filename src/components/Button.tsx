type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export function Button({ children, onClick, type = "button", className = "" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full rounded-full bg-white text-primary font-semibold py-3 px-6
        hover:scale-102 hover:shadow-xl
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </button>
  );
}
