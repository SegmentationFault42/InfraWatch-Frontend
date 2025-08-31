// Paleta de cores
const colors = {
  inputBorder: "border-gray-300",
  inputText: "text-white",
  inputBg: "bg-transparent",
  labelDefault: "text-gray-300",
  labelFocus: "text-white",
};

type InputFieldProps = {
  type: string;
  placeholder: string;
};

export function InputField({ type, placeholder }: InputFieldProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={placeholder}
        placeholder=" "
        className={`
          peer w-full border-b ${colors.inputBorder} ${colors.inputBg} py-3 px-1 ${colors.inputText}
          focus:outline-none focus:border-white
        `}
      />
      <label
        htmlFor={placeholder}
        className={`
          absolute left-1 top-3 ${colors.labelDefault} text-sm
          transition-all duration-300
          peer-placeholder-shown:top-3 peer-placeholder-shown:${colors.labelDefault} peer-placeholder-shown:text-sm
          peer-focus:top-[-6px] peer-focus:${colors.labelFocus} peer-focus:text-xs
        `}
      >
        {placeholder}
      </label>
    </div>
  );
}
