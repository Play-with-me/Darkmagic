# Playbook 02: Visual Regression & Screenshot Testing

Use this playbook to detect visual regressions, layout shifts, and missing UI elements.

---

## 1. Capturing and Comparing Snapshots

```ts
import { test, expect } from '@playwright/test';

test('Kiểm tra giao diện trang chủ không bị vỡ bố cục', async ({ page }) => {
  await page.goto('/');

  // Chờ font chữ và hình ảnh tải xong
  await page.waitForLoadState('networkidle');

  // Chụp và so sánh ảnh chụp màn hình
  await expect(page).toHaveScreenshot('homepage-hero.png', {
    maxDiffPixelRatio: 0.02, // Cho phép sai lệch tối đa 2% pixel
  });
});
```

---

## 2. Updating Golden Snapshots

When an intentional design change is made, update the baseline reference images:

```bash
npx playwright test --update-snapshots
```
