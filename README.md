# aCore

Modern Open Source ERP/CRM ecosystem designed to streamline R&D (НИР) workflows and eliminate administrative overhead in academic institutions.

## Demo
- **Live demo:** [https://demo.acore.edu](https://demo.acore.edu) (Coming Soon)
- **Video:** [Product Overview](https://youtube.com/...)
- **Screenshots:** Available in `/docs/assets`

## Problem
Управление научно-исследовательскими работами (НИР) на факультетах часто превращается в "ад из таблиц Excel". Основные проблемы:
- Разрозненность данных о грантах и публикациях.
- Огромные временные затраты менеджеров на ручной сбор отчетности.
- Отсутствие прозрачности в статусах выполнения работ и соблюдении дедлайнов.
- Бюрократическая перегруженность, мешающая научной деятельности.

## Solution
aCore предоставляет единое, минималистичное рабочее пространство, которое автоматизирует жизненный цикл НИР. Продукт заменяет хаотичные таблицы структурированной системой, позволяя менеджерам сосредоточиться на управлении процессами, а не на заполнении ячеек.

## Features
- **R&D Workflow Automation:** Полный цикл отслеживания проектов, от подачи заявки до финальной отчетности.
- **Minimalist Dashboard:** Интерфейс в стиле "Modern SaaS" с использованием glassmorphism, обеспечивающий когнитивную разгрузку.
- **Automated Reporting:** Генерация отчетов по установленным университетским формам в один клик.
- **Role-Based Access:** Четкое разграничение прав доступа между администрацией, менеджерами и исследователями.

## Tech Stack
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Backend:** Nest.js.
- **AI/LLM:** Интеграция с OpenAI/Claude для суммаризации отчетов и проверки соответствия регламентам (в планах).
- **Database:** PostgreSQL (via Prisma or Drizzle).
- **Infra:** Docker-ready, deployment on Vercel/Netlify for frontend and self-hosted Linux for backend.
- **Tooling:** Biome (linting/formatting).

## Architecture
Система построена на модульной архитектуре. Frontend использует преимущества Server Components (Next.js) для высокой производительности и SEO, а Backend на Nest.js обеспечивает масштабируемость и строгое следование принципам SOLID. Взаимодействие происходит через REST API с типизацией на уровне всего приложения.

## Getting Started

### Prerequisites
- Node.js (v20+)
- pnpm

### Installation
```bash
git clone [https://github.com/valentin-team/acore.git](https://github.com/valentin-team/acore.git)
cd acore
pnpm install
````

### Environment variables

Создайте файл `.env` в корне проекта на основе `.env.example`:

  - `DATABASE_URL`
  - `NEXT_PUBLIC_API_URL`
  - `JWT_SECRET`

### Run locally

```bash
# Development mode
pnpm run dev
```

## Usage

1.  **Менеджер:** Заходит в систему, создает карточку НИР, назначает ответственных и устанавливает контрольные точки.
2.  **Исследователь:** Загружает промежуточные результаты; система автоматически уведомляет менеджера об изменениях.
3.  **Аналитика:** В конце квартала система генерирует сводную таблицу по всем работам факультета для подачи в ректорат.

## Roadmap

  - [x] Initial Architecture (Nest.js + Next.js)
  - [ ] **MVP:** Core R\&D tracking logic
  - [ ] **Auth:** Role-based access control (RBAC)
  - [ ] **Analytics:** Interactive charts for faculty performance
  - [ ] **Model routing:** AI agent for automated document checking

## Project Status

**Active development / MVP**

## Contributing

Please refer to our [CONTRIBUTING.md](https://www.google.com/search?q=./CONTRIBUTING.md) for branch naming conventions and code standards.

## License

MIT

### Сводка по проекту

| Параметр | Значение | Ссылки |
| :--- | :--- | :--- |
| **Project Name** | aCore | - |
| **Main Tech** | Next.js, Nest.js, Biome | [Next.js](https://nextjs.org/) / [Nest.js](https://nestjs.com/) / [Biome](https://biomejs.dev/) |
| **UI Style** | Modern SaaS / Minimalist | [shadcn/ui](https://ui.shadcn.com/) |
| **Primary Goal** | R&D Management Automation | - |

