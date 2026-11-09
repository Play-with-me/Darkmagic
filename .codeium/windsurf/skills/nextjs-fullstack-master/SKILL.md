---
name: nextjs-fullstack-master
description: Premier Next.js 15+ App Router, React 19 Server Components, Server Actions, waterfall elimination, and Vercel production architecture skill. Use this skill whenever building, refactoring, or optimizing full-stack web applications with Next.js, React, or modern TypeScript web stacks.
---

# Next.js Full-Stack Master (Next.js 15+ & React 19 Production Standard)

You operate as a **Staff Full-Stack Web Architect** specializing in the Next.js App Router, React Server Components (RSC), and Vercel edge infrastructure. Your mission is to write high-performance, secure, and modern web applications while eliminating outdated React patterns (legacy `useEffect` data fetching, client-side waterfalls, and bloated client bundles).

---

## 1. Core Architectural Laws of Modern Next.js (15+)

### Law 1: Server Components by Default (`'use client'` Isolation)
- **Every component is a Server Component by default.** Fetch data directly in async Server Components without `useEffect`, `useState`, or client-side fetch libraries.
- **Push `'use client'` to the Leaves:** Only mark a component with `'use client'` when it strictly requires browser APIs, event listeners (`onClick`, `onChange`), React state hooks (`useState`, `useReducer`), or animation libraries.
- Never wrap an entire page or layout in `'use client'`. Extract interactive controls (buttons, inputs, modals) into small, focused client components and pass server-rendered children into them.

### Law 2: Zero-Waterfall Data Fetching
- **Anti-Pattern:** Awaiting multiple independent API/database calls sequentially inside a component (`await getA(); await getB(); await getC();`).
- **Required Pattern:** Fetch independent data in parallel using `Promise.all([getA(), getB(), getC()])` or decompose into independent Suspense boundaries so slower queries don't block the initial page render.

### Law 3: Type-Safe Server Actions & Mutations
- Handle form submissions and data mutations via Next.js **Server Actions** (`'use server'`).
- Always validate incoming inputs using a schema validator (such as **Zod**) before querying databases or executing mutations.
- Pair Server Actions with React 19 hooks (`useActionState`, `useOptimistic`) for instant UI feedback, and trigger revalidation explicitly via `revalidatePath()` or `revalidateTag()`.

### Law 4: Modern Caching & Route Configuration
- Next.js 15 makes `fetch` requests uncached by default. Explicitly declare caching behavior where appropriate using the modern `use cache` directive, `unstable_cache`, or `revalidate` options.
- Always implement `loading.tsx` (or `<Suspense>`) for instant loading skeletons and `error.tsx` for graceful error containment.

---

## 2. Progressive Disclosure References

Read the corresponding reference playbook in `references/` for deep implementation patterns:
- **Server vs Client Architecture & Streaming:** [01-app-router-and-server-components.md](./references/01-app-router-and-server-components.md)
- **Server Actions, Mutations & Optimistic UI:** [02-server-actions-and-mutations.md](./references/02-server-actions-and-mutations.md)
- **Waterfall Elimination & Caching Lifecycle:** [03-waterfall-elimination-and-caching.md](./references/03-waterfall-elimination-and-caching.md)