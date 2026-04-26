"use client";

import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { FilterBar } from "@/components/features/nir/filter-bar";
import { ProjectList } from "@/components/features/nir/project-list";
import type { NIR, StatusFilter } from "@/types/nir";

const nir: NIR[] = [
  {
    id: "НИР-2026-01",
    title: "Автоматизация учётных систем кафедры",
    departmentHead: "Людмила Карпова",
    status: "В работе",
    lastUpdated: "24 апр. 2026",
  },
  {
    id: "НИР-2026-02",
    title: "Анализ эффективности методической работы",
    departmentHead: "Наталья Семёнова",
    status: "На согласовании",
    lastUpdated: "22 апр. 2026",
  },
  {
    id: "НИР-2026-03",
    title: "Цифровизация документооборота факультета",
    departmentHead: "Оксана Мирова",
    status: "В работе",
    lastUpdated: "21 апр. 2026",
  },
  {
    id: "НИР-2026-04",
    title: "Оптимизация планирования учебной нагрузки",
    departmentHead: "Александр Дьяков",
    status: "Завершено",
    lastUpdated: "18 апр. 2026",
  },
  {
    id: "НИР-2026-05",
    title: "Мониторинг публикационной активности кафедр",
    departmentHead: "Наталья Семёнова",
    status: "На согласовании",
    lastUpdated: "17 апр. 2026",
  },
  {
    id: "НИР-2026-06",
    title: "Разработка системы внутренней аттестации",
    departmentHead: "Людмила Карпова",
    status: "В работе",
    lastUpdated: "15 апр. 2026",
  },
  {
    id: "НИР-2026-07",
    title: "Формирование реестра грантовых заявок",
    departmentHead: "Александр Дьяков",
    status: "Завершено",
    lastUpdated: "10 апр. 2026",
  },
];

const inWorkCount = nir.filter((n) => n.status === "В работе").length;
const pendingCount = nir.filter((n) => n.status === "На согласовании").length;
const doneCount = nir.filter((n) => n.status === "Завершено").length;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Все");

  const filteredNir = useMemo(
    () =>
      nir.filter((item) => {
        const matchesStatus =
          statusFilter === "Все" || item.status === statusFilter;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          item.title.toLowerCase().includes(q) ||
          item.departmentHead.toLowerCase().includes(q);
        return matchesStatus && matchesSearch;
      }),
    [searchQuery, statusFilter],
  );

  const hasActiveFilters = searchQuery !== "" || statusFilter !== "Все";

  function clearFilters() {
    setSearchQuery("");
    setStatusFilter("Все");
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-10 py-10">
      {/* Breadcrumbs */}
      <nav className="mb-7 flex items-center gap-1.5 text-[13px]">
        <span style={{ color: "#a39e98" }}>Факультет</span>
        <span style={{ color: "#c8c3be" }}>/</span>
        <span style={{ color: "#615d59" }}>Внутренние НИР</span>
      </nav>

      {/* Page header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1
            className="text-[32px] font-bold leading-[1.2]"
            style={{ color: "rgba(0,0,0,0.95)", letterSpacing: "-0.75px" }}
          >
            Текущие проекты НИР
          </h1>
          <p className="mt-2 text-[13px]" style={{ color: "#a39e98" }}>
            {nir.length} проектов &middot; {inWorkCount} в работе &middot;{" "}
            {pendingCount} на согласовании &middot; {doneCount} завершено
          </p>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-1.5 rounded px-3 py-1.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90 active:opacity-75"
          style={{ backgroundColor: "#0075de" }}
        >
          <Plus size={13} strokeWidth={2.5} />
          Создать НИР
        </button>
      </div>

      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Separator */}
      <div className="my-4 border-t border-black/[0.08]" />

      <ProjectList
        projects={filteredNir}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />
    </div>
  );
}
