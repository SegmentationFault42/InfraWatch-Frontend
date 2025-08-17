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
        className="
          peer w-full border-b border-gray-300 bg-transparent py-3 px-1 text-white
          focus:outline-none focus:border-white
        "
      />
      <label
        htmlFor={placeholder}
        className="
          absolute left-1 top-3 text-gray-300 text-sm
          transition-all duration-300
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm
          peer-focus:top-[-6px] peer-focus:text-white peer-focus:text-xs
        "
      >
        {placeholder}
      </label>
    </div>
  );
}