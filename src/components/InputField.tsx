type Props = {
  type: string;
  placeholder: string;
};

export function InputField({ type, placeholder }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-b border-gray-300 bg-transparent py-2 px-1 text-white placeholder-gray-300 focus:outline-none focus:border-white"
    />
  );
}
