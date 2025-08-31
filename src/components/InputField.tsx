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
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export function InputField({
  type,
  placeholder,
  value = "",
  onChange,
  required = false,
  disabled = false,
}: InputFieldProps) {
  const hasValue = value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={placeholder}
        placeholder=" "
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`
          peer w-full border-b ${colors.inputBorder} ${colors.inputBg} py-3 px-1 ${colors.inputText}
          focus:outline-none focus:border-white disabled:opacity-50 disabled:cursor-not-allowed
        `}
      />
      <label
        htmlFor={placeholder}
        className={`
          absolute left-1 text-sm transition-all duration-300
          ${hasValue ? "-top-1 text-xs " + colors.labelFocus : "top-3 " + colors.labelDefault}
          peer-focus:-top-1 peer-focus:${colors.labelFocus} peer-focus:text-xs
        `}
      >
        {placeholder}
      </label>
    </div>
  );
}
