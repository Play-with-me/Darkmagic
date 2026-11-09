# Playbook 02: Type-Safe Server Actions & Mutations

Use this playbook for handling user form submissions, database updates, and state mutations.

---

## 1. Production Server Action Pattern

Always validate payloads with Zod and return structured, predictable error states:

```ts
// app/actions/update-profile.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const ProfileSchema = z.object({
  fullName: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  bio: z.string().max(250, 'Tiểu sử không vượt quá 250 ký tự').optional(),
});

export type ActionState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function updateProfileAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = Object.fromEntries(formData.entries());
  const validated = ProfileSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    // Execute database mutation (e.g., Supabase / Prisma / Drizzle)
    // await db.user.update(...)

    revalidatePath('/dashboard/profile');
    return { success: true, message: 'Cập nhật thông tin thành công!' };
  } catch (error) {
    return { success: false, message: 'Lỗi máy chủ khi cập nhật dữ liệu.' };
  }
}
```

---

## 2. Client Consumption with React 19 `useActionState`

```tsx
'use client';

import { useActionState } from 'react';
import { updateProfileAction, ActionState } from '@/app/actions/update-profile';

const initialState: ActionState = { success: false };

export function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfileAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <input name="fullName" placeholder="Họ và tên" className="border p-2 rounded" />
      {state.errors?.fullName && <p className="text-red-500 text-sm">{state.errors.fullName[0]}</p>}
      
      <button type="submit" disabled={isPending} className="bg-blue-600 text-white px-4 py-2 rounded">
        {isPending ? 'Đang lưu...' : 'Lưu thay đổi'}
      </button>
      {state.message && <p className="text-sm font-medium">{state.message}</p>}
    </form>
  );
}
```
