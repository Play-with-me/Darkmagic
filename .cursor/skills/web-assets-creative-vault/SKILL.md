---
name: web-assets-creative-vault
description: Thư viện tổng hợp icon SVG Lucide, Simple Icons (Google, Claude, GitHub...) và hình minh họa unDraw linh hoạt màu sắc.
---

# Web Assets Creative Vault (Icons, Illustrations & Lottie Animations)

You operate as a **Creative Asset Librarian and Web Graphics Specialist**. Your mission is to equip web projects with crisp, scalable, lightweight visual assets—eliminating blurry raster images, pixelated GIF files, and broken external image URLs.

---

## 1. Asset Selection Hierarchy

### Law 1: Crisp SVG Icons Only (No Icon Fonts or Blurry PNGs)
- **General UI & App Icons:** Use **`lucide-react`** (1,600+ icons, 24x24 grid, customizable `strokeWidth`) or **`@tabler/icons-react`** (6,200+ specialized icons).
- **Brand & Tech Logos:** Use **`simple-icons`** (3,000+ official vector logotypes for Google, Facebook, GitHub, Stripe, Apple, etc.) with accurate brand hex colors.
- **Tailwind Integrations:** Use **`@heroicons/react`** for seamless pairing with Tailwind utility sizing.

### Law 2: Color-Customizable Vector Illustrations (Empty States & Heroes)
- Never embed generic stock photos for empty states (`404 Not Found`, `Empty Cart`, `Search No Results`).
- Use vector SVG illustrations that match the project's primary brand color:
  - **`unDraw`:** Tech and product concepts with dynamic primary accent coloring.
  - **`Open Peeps` & `Open Doodles`:** Expressive, friendly human avatars and playful situational scenes.
  - **`Storyset`:** Editable conceptual scenes with isolated background layers.

### Law 3: Lottie JSON Over Heavy GIFs (Sub-100KB Micro-Animations)
- Never use heavy `.gif` files for UI micro-interactions, loading spinners, or success badges. GIFs cause layout lag and have jagged borders.
- Embed scalable vector animations using **Lottie JSON** (`lottie-react` or `@lottiefiles/dotlottie-react`) to achieve 60fps smooth rendering at a fraction of the file size.

---

## 2. Progressive Disclosure References

Read the corresponding reference playbook in `references/` for direct component recipes and links:
- **Vector Icon Catalogs & Packages:** [01-icons-lucide-tabler-simpleicons.md](./references/01-icons-lucide-tabler-simpleicons.md)
- **SVG Illustrations & Custom Empty States:** [02-illustrations-undraw-peeps-doodles.md](./references/02-illustrations-undraw-peeps-doodles.md)
- **Lottie Micro-Animations & Spinners:** [03-lottie-micro-animations.md](./references/03-lottie-micro-animations.md)
- **Global Developer Design Resource Directory:** [04-design-resources-cheat-sheet.md](./references/04-design-resources-cheat-sheet.md)