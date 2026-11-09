# Playbook 03: Lightweight Lottie Micro-Animations

Use this playbook to render smooth 60fps JSON animations without heavy GIF files.

---

## 1. Installing Lottie in React / Next.js

```bash
npm install lottie-react
```

---

## 2. Success Checkmark & Loading Spinner Recipe

```tsx
'use client';

import Lottie from 'lottie-react';
import successAnimation from '@/assets/animations/success-check.json';

export function SuccessFeedbackModal() {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="w-24 h-24">
        <Lottie animationData={successAnimation} loop={false} />
      </div>
      <h2 className="text-xl font-bold mt-2">Thao tác thành công!</h2>
      <p className="text-muted-foreground text-sm">Dữ liệu của bạn đã được lưu an toàn.</p>
    </div>
  );
}
```

- **Sources for Free Lottie Files:**
  - [LottieFiles.com](https://lottiefiles.com/free-animations)
  - [UseAnimations.com](https://useanimations.com/) (Micro-interaction open source pack)
