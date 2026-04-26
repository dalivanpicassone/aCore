import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatusFilter } from "@/types/nir";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: StatusFilter;
  setStatusFilter: (status: StatusFilter) => void;
}

const STATUS_FILTERS: { label: string; value: StatusFilter }[] = [
  { label: "Все", value: "Все" },
  { label: "В работе", value: "В работе" },
  { label: "На согласовании", value: "На согласовании" },
  { label: "Завершено", value: "Завершено" },
];

export function FilterBar({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Search input */}
      <div className="relative flex min-w-0 flex-1 items-center">
        <Search
          size={13}
          className="pointer-events-none absolute left-2.5 shrink-0"
          style={{ color: "#a39e98" }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск по названию или руководителю..."
          className="h-8 w-full rounded border border-black/[0.12] bg-transparent pl-8 pr-8 text-[13px] text-black/90 outline-none transition-colors placeholder:text-[#c8c3be] focus-visible:border-black/30 focus-visible:ring-0"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-2.5 flex items-center justify-center transition-opacity hover:opacity-60"
            aria-label="Очистить поиск"
          >
            <X size={12} style={{ color: "#a39e98" }} />
          </button>
        )}
      </div>

      {/* Status filter pills */}
      <div className="flex shrink-0 items-center gap-0.5">
        {STATUS_FILTERS.map((f) => {
          const isActive = statusFilter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setStatusFilter(f.value)}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
                isActive
                  ? "bg-black/[0.07] text-black/85"
                  : "text-[#a39e98] hover:bg-black/[0.04] hover:text-[#615d59]",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
