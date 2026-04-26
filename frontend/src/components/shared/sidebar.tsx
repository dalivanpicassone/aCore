import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
}

interface NavSection {
  category: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    category: "Workspace",
    items: [
      { icon: LayoutDashboard, label: "Дашборд", href: "/", active: true },
      { icon: FileText, label: "Проекты НИР", href: "/nir" },
      { icon: BookOpen, label: "Публикации", href: "/publications" },
    ],
  },
  {
    category: "Кафедры",
    items: [
      { icon: Users, label: "Каф. ИВТ", href: "/dept/ivt" },
      { icon: Users, label: "Каф. программного обеспечения", href: "/dept/po" },
      { icon: Users, label: "Каф. математики", href: "/dept/math" },
    ],
  },
];

export function Sidebar() {
  return (
    <aside
      className="flex h-full w-[220px] shrink-0 flex-col border-r border-black/10"
      style={{ backgroundColor: "#f6f5f4" }}
    >
      <div className="flex h-12 items-center border-b border-black/10 px-4">
        <span
          className="text-[13px] font-semibold tracking-tight"
          style={{ color: "rgba(0,0,0,0.9)" }}
        >
          aCore
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-5 overflow-y-auto px-2 py-4">
        {navSections.map((section) => (
          <div key={section.category}>
            <p
              className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.08em]"
              style={{ color: "#a39e98" }}
            >
              {section.category}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded px-2 py-[5px] text-[13px] transition-colors",
                    item.active
                      ? "bg-black/[0.06] font-medium"
                      : "font-normal hover:bg-black/[0.04]",
                  )}
                  style={{
                    color: item.active ? "rgba(0,0,0,0.9)" : "#615d59",
                  }}
                >
                  <item.icon
                    size={13}
                    className="shrink-0"
                    style={{
                      color: item.active ? "rgba(0,0,0,0.6)" : "#a39e98",
                    }}
                  />
                  <span className="truncate">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-black/10 px-2 py-3">
        <a
          href="/settings"
          className="flex items-center gap-2 rounded px-2 py-[5px] text-[13px] transition-colors hover:bg-black/[0.04]"
          style={{ color: "#615d59" }}
        >
          <Settings size={13} style={{ color: "#a39e98" }} />
          <span>Настройки</span>
        </a>
      </div>
    </aside>
  );
}
