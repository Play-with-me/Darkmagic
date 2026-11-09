# Playbook 01: Playwright Test Suite Setup & Fixtures

Use this playbook to configure and write deterministic E2E test suites with Microsoft Playwright.

---

## 1. Initializing Playwright in Modern Web Projects

```bash
npm init playwright@latest
```

---

## 2. Robust Test Scenario Pattern

```ts
// tests/auth-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Luồng Đăng Nhập & Bảo Mật', () => {
  test('Người dùng đăng nhập thành công và nhìn thấy trang chính', async ({ page }) => {
    // 1. Mở trang đăng nhập
    await page.goto('/login');

    // 2. Điền thông tin bằng User-Centric locators
    await page.getByLabel('Địa chỉ Email').fill('test@example.com');
    await page.getByLabel('Mật khẩu').fill('MatKhauBaoMat123!');
    await page.getByRole('button', { name: 'Đăng nhập' }).click();

    // 3. Auto-retrying assertion xác nhận đã chuyển trang
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByRole('heading', { name: 'Bảng điều khiển' })).toBeVisible();
  });
});
```
