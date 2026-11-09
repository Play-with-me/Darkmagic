# Playbook 01: App Router & React Server Components (RSC) Architecture

Use this playbook to design clean, high-performance page hierarchies with the Next.js App Router.

---

## 1. The Server/Client Component Boundary Rule

```text
┌──────────────────────────────────────────────────────────────────┐
│ page.tsx (Server Component — Async Data Fetching)                │
│                                                                  │
│   ├── UserProfileHeader (Server Component)                       │
│   │     └── AvatarImage (Server Component)                       │
│   │                                                              │
│   └── 🔒 InteractiveFollowButton.tsx ('use client' — Leaf Only)  │
│         └── onClick event handler & pending state                │
└──────────────────────────────────────────────────────────────────┘
```

1. **How to pass Server Components into Client Components:**
   - Client components cannot directly `import` Server Components.
   - **Correct Pattern:** Pass the Server Component as a `children` prop:
     ```tsx
     // ClientContainer.tsx ('use client')
     export function ClientContainer({ children }: { children: React.ReactNode }) {
       const [open, setOpen] = useState(false);
       return <div>{open && children}</div>;
     }
     ```

---

## 2. Streaming with React Suspense

Never let a slow database query or external API delay the first byte of your page. Wrap slow components in `<Suspense>`:

```tsx
import { Suspense } from 'react';
import { FastMetricsBar } from '@/components/metrics';
import { SlowActivityFeed } from '@/components/activity-feed';
import { ActivityFeedSkeleton } from '@/components/skeletons';

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <FastMetricsBar />
      <Suspense fallback={<ActivityFeedSkeleton />}>
        <SlowActivityFeed />
      </Suspense>
    </div>
  );
}
```
