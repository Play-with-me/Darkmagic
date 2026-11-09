# Playbook 02: Tailwind CSS v4 & Responsive Layout Patterns

Use this playbook to master Tailwind CSS v4 styling conventions.

---

## 1. Modern Theme Token Mapping (Tailwind v4 `@theme`)

```css
@import "tailwindcss";

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
```

---

## 2. Responsive Layout Conventions

- **Mobile First Default:** Stack elements vertically by default (`flex flex-col gap-4`).
- **Tablet / Desktop Expansion:** Switch to multi-column only at defined breakpoints:
  - `sm: 640px` (Dense phones / small tablets)
  - `md: 768px` (Tablets / 2-column forms)
  - `lg: 1024px` (Desktops / Sidebar + Workspace layout)
  - `xl: 1280px` (Wide screens / Data tables)
