# Playbook 01: Vector Icon Catalogs & Package Recipes

Use this playbook to install and import vector icons across web frameworks.

---

## 1. Lucide Icons (`lucide-react`)

```bash
npm install lucide-react
```

```tsx
import { CheckCircle2, AlertTriangle, ArrowRight, Search } from 'lucide-react';

export function ActionButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
      <span>Tiếp tục</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
```

---

## 2. Simple Icons (Brand & Platform Logos)

```bash
npm install simple-icons
```

Or via React Icons:
```bash
npm install react-icons
```

```tsx
import { SiGoogle, SiGithub, SiStripe, SiApple } from 'react-icons/si';

export function SocialAuthButtons() {
  return (
    <div className="flex gap-3">
      <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-muted">
        <SiGoogle className="w-4 h-4 text-[#4285F4]" />
        <span>Đăng nhập với Google</span>
      </button>
      <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-muted">
        <SiGithub className="w-4 h-4 text-foreground" />
        <span>GitHub</span>
      </button>
    </div>
  );
}
```
