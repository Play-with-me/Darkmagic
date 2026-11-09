# Playbook 03: Google `DESIGN.md` Specification & Brand Archetypes

Synthesized from:
- **`google-labs-code/design.md`** (Google Labs / Stitch standard for machine- + human-readable design systems)
- **`VoltAgent/awesome-design-md`** (Curated brand design systems from Linear, Stripe, Apple, Vercel, Notion, Raycast)

---

## 1. How to Use `DESIGN.md` in Any Project

1. **Always Check for `DESIGN.md` First:**
   - Before writing CSS/Tailwind for a project, check if `DESIGN.md` exists in the project root.
   - If it exists, **never invent new colors, border radii, or font sizes** outside its tokens.
2. **When to Create/Update `DESIGN.md`:**
   - When the user asks to establish a consistent design system or overhaul an app's look, create a `DESIGN.md` file in the root using the template below.

---

## 2. Ready-to-Use Brand Archetypes (`awesome-design-md`)

When asking the user which aesthetic they prefer (in Part 1 Client View), offer these proven archetypes:

### Archetype 1: Linear / Raycast (Precision Dark Workspace)
- **Best for:** AI apps, coding tools, multi-agent workspaces, power-user dashboards.
- **Surfaces:** App bg `#090A0F`, Panel `#10121A`, Elevated card `#161924`, Subtle border `rgba(255, 255, 255, 0.08)`.
- **Text:** Primary `#F3F4F6`, Secondary `#9CA3AF`, Muted `#6B7280`.
- **Accents:** Primary action `#5E6AD2` (Indigo) or `#10B981` (Emerald for active/complete), Warning `#F59E0B`, Danger `#EF4444`.
- **Radius & Borders:** `6px` for buttons/badges, `10px` for panels, `1px` hairline translucent borders.

### Archetype 2: Stripe / Vercel (Crisp Daylight & High-Clarity SaaS)
- **Best for:** Educational platforms, dashboards, forms, document tools.
- **Surfaces:** App bg `#F8FAFC`, Card `#FFFFFF`, Muted fill `#F1F5F9`, Border `#E2E8F0`.
- **Text:** Primary `#0F172A`, Secondary `#475569`, Muted `#94A3B8`.
- **Accents:** Primary `#0F172A` (High-contrast slate button) or `#2563EB` (Royal Blue), Success `#059669`.
- **Radius & Shadows:** `8px` controls, `12px` cards, soft ambient shadow `0 1px 3px rgba(15, 23, 42, 0.06)`.

### Archetype 3: Notion / Claude (Warm Editorial & Reading Comfort)
- **Best for:** Learning apps, reading/writing interfaces, long-form AI tutoring.
- **Surfaces:** Warm paper bg `#FAF9F5` (Light) or `#191918` (Warm Dark), Card `#FFFFFF` / `#222220`, Border `rgba(0,0,0,0.08)`.
- **Typography:** Comfortable reading measure (`65ch`), warm charcoal text `#1F1E1D`.

---

## 3. Standard `DESIGN.md` Template (`google-labs-code/design.md` Format)

```markdown
# Project Design System (`DESIGN.md`)

## 1. Brand Essence & Aesthetic Direction
- **Archetype:** [e.g., Linear Precision Dark / Warm Educational Clarity]
- **Core Principle:** High signal-to-noise ratio, instant state clarity, zero decorative clutter.

## 2. Color Tokens
- `--bg-canvas`: `#0B0D13`
- `--bg-surface`: `#12151E`
- `--bg-elevated`: `#1A1E2B`
- `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- `--text-primary`: `#F3F4F6`
- `--text-secondary`: `#9CA3AF`
- `--accent-primary`: `#4F46E5`
- `--status-success`: `#10B981`
- `--status-warning`: `#F59E0B`
- `--status-danger`: `#EF4444`

## 3. Typography & Spacing Scale
- **Font Stack:** `'Inter', -apple-system, sans-serif` | Code: `'JetBrains Mono', monospace`
- **Spacing Rhythm:** Multiples of `4px` (`4, 8, 12, 16, 24, 32, 48px`)
- **Component Radii:** Controls `6px` | Cards `10px` | Modals `14px`
```
