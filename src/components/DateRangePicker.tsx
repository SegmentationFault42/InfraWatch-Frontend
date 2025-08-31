import { Button } from "./Button";

// Paleta de cores
const colors = {
  inputBg: "bg-white",
  inputBorder: "border-gray-200",
  inputText: "text-gray-700",
  inputFocusRing: "focus:ring-violet-600",
  label: "text-gray-500",
  btnBg: "#5b3cc4",
  btnHover: "#4a2ea1",
  btnText: "text-white",
};

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartChange?: (date: string) => void;
  onEndChange?: (date: string) => void;
  onGenerate?: () => void;
}

export function DateRangePicker({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  onGenerate,
}: DateRangePickerProps) {
  return (
    <div className="flex items-center mt-6 w-full gap-4">
      <div className="flex items-center gap-2 w-full md:w-1/3">
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartChange && onStartChange(e.target.value)}
          className={`flex-1 border ${colors.inputBorder} rounded-md px-3 py-2 text-sm ${colors.inputText} ${colors.inputBg} shadow-sm focus:outline-none focus:ring-1 ${colors.inputFocusRing}`}
        />
        <span className={`font-medium ${colors.label}`}>até</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndChange && onEndChange(e.target.value)}
          className={`flex-1 border ${colors.inputBorder} rounded-md px-3 py-2 text-sm ${colors.inputText} ${colors.inputBg} shadow-sm focus:outline-none focus:ring-1 ${colors.inputFocusRing}`}
        />
      </div>

      <div className="flex-1"></div>

      <div className="flex-shrink-0">
        <Button
          onClick={onGenerate}
          className={`!px-5 !py-2.5 !rounded-md !bg-[${colors.btnBg}] !text-[${colors.btnText}] shadow hover:!bg-[${colors.btnHover}]`}
        >
          Obter Relatório
        </Button>
      </div>
    </div>
  );
}
