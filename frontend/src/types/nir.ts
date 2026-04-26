export type NIRStatus = "В работе" | "На согласовании" | "Завершено";

export type StatusFilter = NIRStatus | "Все";

export interface NIR {
  id: string;
  title: string;
  departmentHead: string;
  status: NIRStatus;
  lastUpdated: string;
}
