# Playbook 03: Radix Primitives & Accessibility Standards

Use this playbook to guarantee accessibility compliance across interactive components.

---

## 1. Mandatory Accessibility Rules

1. **Accessible Names on Icon Buttons:**
   - Always include an `aria-label` or visually hidden screen-reader text on icon-only buttons:
     ```tsx
     <Button variant="ghost" size="icon" aria-label="Đóng cửa sổ">
       <X className="h-4 w-4" />
     </Button>
     ```
2. **Focus Rings:**
   - Never suppress `:focus` outlines with `outline-none` without providing an explicit replacement.
   - Use `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
3. **Modal & Dialog Focus Trapping:**
   - Dialogs must lock focus inside the open modal and restore focus to the triggering element when dismissed.
