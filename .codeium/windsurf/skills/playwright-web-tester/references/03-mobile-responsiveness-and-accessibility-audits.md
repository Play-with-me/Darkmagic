# Playbook 03: Mobile Responsiveness & Accessibility Auditing

Use this playbook to ensure interfaces work seamlessly on phones and meet accessibility standards.

---

## 1. Multi-Device Viewport Testing (`playwright.config.ts`)

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-iphone',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'mobile-android',
      use: { ...devices['Pixel 7'] },
    },
  ],
});
```

---

## 2. Automated Accessibility Audit with `@axe-core/playwright`

```bash
npm install @axe-core/playwright
```

```ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Trang web phải đạt chuẩn trợ năng WCAG AA', async ({ page }) => {
  await page.goto('/dashboard');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
