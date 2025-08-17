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
      className={`w-full rounded-full bg-white text-primary font-semibold py-2 px-4 hover:bg-gray-100 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
