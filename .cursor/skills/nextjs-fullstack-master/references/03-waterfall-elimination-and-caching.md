# Playbook 03: Waterfall Elimination & Caching Lifecycle

Use this playbook to achieve sub-second page loads and eliminate wasteful round-trips.

---

## 1. The Waterfall Elimination Audit

### ❌ The Waterfall Anti-Pattern (Slow)
```tsx
// Total wait time = Time(User) + Time(Posts) + Time(Notifications) = 600ms + 400ms + 300ms = 1300ms!
const user = await getUser();
const posts = await getPosts(user.id);
const notifications = await getNotifications();
```

### ✅ Parallel Execution (Fast)
```tsx
// Total wait time = Max(Time(User), Time(Notifications)) = 600ms!
const [user, notifications] = await Promise.all([
  getUser(),
  getNotifications()
]);
// Then fetch dependent data:
const posts = await getPosts(user.id);
```

---

## 2. Next.js Dynamic vs Cached Directives

1. **Static Rendering (Fastest CDN Delivery):** Default when routes contain no dynamic functions (`cookies()`, `headers()`, or search params).
2. **Dynamic Rendering:** Automatically triggered when using request-time user headers, cookies, or database mutations.
3. **Explicit Tag Revalidation:**
   ```ts
   // Revalidate specific caches on demand:
   revalidateTag('user-profile-data');
   ```
