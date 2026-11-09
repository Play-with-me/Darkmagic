# Playbook 04: The 118-Point Anti-AI-Slop Quality Gate (`Impeccable` + `Hallmark`)

Synthesized from:
- **`pbakaus/impeccable`** (24 workflow commands & 61 deterministic anti-slop rules)
- **`nutlope/hallmark`** (57 design quality criteria & structural macrostructures)

Run this audit checklist before shipping any frontend component or screen.

---

## 1. Visual Anti-Slop Rules (What You Must NEVER Do)

1. **No "AI Gradient" Abuse:**
   - Do not slap `bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500` on headers, buttons, or text unless the brand explicitly requires it. Use solid, high-craft semantic surfaces.
2. **No "Box-in-Box-in-Box" Syndrome:**
   - Never nest more than 2 bordered containers deep (`Outer Card -> Inner Card -> Bordered Item`). Use whitespace, subtle background tinting, or hairline dividers instead of wrapping everything in a box.
3. **No Generic 3-Column Emoji Cards:**
   - Do not default to 3 identical rounded cards with centered emojis (`🚀`, `✨`, `💡`) for every feature or dashboard screen.
4. **No Cluttered Control Bars:**
   - Do not place 5 buttons of the same visual weight in a row. Enforce clear visual hierarchy: **1 Primary**, **1 Secondary**, and group the rest.
5. **No Mystery Meat Icons or Vague Labels:**
   - Icon-only buttons must have tooltips and `aria-label`. Action buttons must state *what* they do (`[Tạo Code Bước 2]` instead of `[Hoàn thành]`).

---

## 2. Typography, Contrast & Rhythm Checks (`Hallmark` 57 Criteria Core)

- [ ] **Contrast Gate (WCAG AA):** Body text achieves at least `4.5:1` contrast against its surface; muted text achieves at least `3.0:1`.
- [ ] **Line Length (Measure):** Instructional or chat text is constrained to `60ch–75ch` so the eye doesn't travel across a 1920px screen.
- [ ] **Alignment Discipline:** Text inside workspaces, forms, and dashboards is left-aligned (never center-align multi-line body paragraphs inside app panels).
- [ ] **Consistent Icon Weight:** All icons on a screen share the same stroke width (`1.5px` or `1.75px`) and optical size (`16px` inline with text, `20px` in headers).
- [ ] **Padding Symmetry:** Card internal padding follows optical balance (e.g., `p-4` or `p-5` consistently, with button horizontal padding `2x` its vertical padding, such as `px-3.5 py-1.5`).

---

## 3. Built-in Audit Workflow (`Impeccable` Command Patterns)

When the user asks to *"Tối ưu lại giao diện"* (Optimize/Polish this UI), systematically apply these 4 passes:

1. **`critique` Pass (UX & Hierarchy):** Identify what confuses the user first (missing status badges, unclear buttons, competing focal points).
2. **`layout` Pass (Structure & Overflow):** Fix flex/grid scrolling, pin headers/footers, and align spacing to the `4px/8px` grid.
3. **`polish` Pass (Surface & Typography):** Upgrade raw colors, tighten border opacity, and refine typography scale.
4. **`audit` Pass (5-State Completeness):** Verify `Empty`, `Loading (+ Cancel button)`, `Partial`, `Error`, and `Completed` states.
