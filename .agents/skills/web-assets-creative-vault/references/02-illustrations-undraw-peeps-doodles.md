# Playbook 02: SVG Illustrations & Empty State Scenes

Use this playbook for embedding clean, brand-matched vector illustrations.

---

## 1. unDraw Brand-Colored Illustration Pattern

- **Source:** [undraw.co](https://undraw.co/illustrations)
- **Key Advantage:** Inline SVG code allows dynamic CSS fill replacement so the illustration matches the user's primary theme:

```tsx
export function EmptyStateIllustration({ color = 'currentColor' }: { color?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <svg className="w-64 h-48 mb-4" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Replace primary accent fills with CSS currentColor or theme variable */}
        <path d="..." fill={color} />
      </svg>
      <h3 className="text-lg font-semibold">Chưa có dữ liệu nào</h3>
      <p className="text-sm text-muted-foreground mt-1">Hãy bấm tạo mục mới để bắt đầu dự án của bạn.</p>
    </div>
  );
}
```

---

## 2. Open Peeps & Open Doodles (Playful Characters)

- **Sources:** [openpeeps.com](https://www.openpeeps.com/) & [opendoodles.com](https://www.opendoodles.com/)
- **Best Use Cases:** User onboarding wizards, avatar profile placeholders, educational gamification, and 404 error states.
