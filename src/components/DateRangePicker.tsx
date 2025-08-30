import { Button } from "./Button";

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
          className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-600"
        />
        <span className="text-gray-500 font-medium">até</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndChange && onEndChange(e.target.value)}
          className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-600"
        />
      </div>

      <div className="flex-1"></div>

      <div className="flex-shrink-0">
        <Button
          onClick={onGenerate}
          className="!px-5 !py-2.5 !rounded-md !bg-[#5b3cc4] !text-white shadow hover:bg-[#4a2ea1]"
        >
          Obter Relatório
        </Button>
      </div>
    </div>
  );
}
