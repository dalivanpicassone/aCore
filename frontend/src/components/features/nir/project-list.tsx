import { SearchX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { NIR, NIRStatus } from "@/types/nir";

interface ProjectListProps {
  projects: NIR[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

const statusBadgeVariant: Record<
  NIRStatus,
  "blue" | "green" | "orange" | "gray"
> = {
  "В работе": "blue",
  "На согласовании": "orange",
  Завершено: "green",
};

const COL = "1fr 172px 148px 104px";

export function ProjectList({
  projects,
  hasActiveFilters,
  onClearFilters,
}: ProjectListProps) {
  return (
    <div>
      {/* Column headers */}
      <div
        className="mb-px grid items-center gap-6 px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.07em]"
        style={{
          gridTemplateColumns: COL,
          color: "#a39e98",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <span>Название</span>
        <span>Руководитель</span>
        <span>Статус</span>
        <span className="text-right">Обновлено</span>
      </div>

      {/* Rows */}
      {projects.length > 0 ? (
        <div>
          {projects.map((item) => (
            <div
              key={item.id}
              className="group grid cursor-pointer items-center gap-6 px-3 py-3 transition-colors hover:bg-black/[0.025]"
              style={{
                gridTemplateColumns: COL,
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Title + ID */}
              <div className="min-w-0">
                <p
                  className="truncate text-[13px] font-medium"
                  style={{ color: "rgba(0,0,0,0.9)" }}
                >
                  {item.title}
                </p>
                <p className="mt-0.5 text-[11px]" style={{ color: "#a39e98" }}>
                  {item.id}
                </p>
              </div>

              {/* Department head */}
              <p className="truncate text-[13px]" style={{ color: "#615d59" }}>
                {item.departmentHead}
              </p>

              {/* Status badge */}
              <div>
                <Badge variant={statusBadgeVariant[item.status]}>
                  {item.status}
                </Badge>
              </div>

              {/* Last updated */}
              <p
                className="text-right text-[12px]"
                style={{ color: "#a39e98" }}
              >
                {item.lastUpdated}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <SearchX size={28} style={{ color: "#d4cfc9" }} />
          <p
            className="mt-3 text-[14px] font-medium"
            style={{ color: "#a39e98" }}
          >
            Ничего не найдено
          </p>
          <p className="mt-1.5 text-[13px]" style={{ color: "#c8c3be" }}>
            Попробуйте изменить фильтры или поисковый запрос
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-4 text-[13px] transition-opacity hover:opacity-70"
              style={{ color: "#0075de" }}
            >
              Сбросить фильтры
            </button>
          )}
        </div>
      )}
    </div>
  );
}
