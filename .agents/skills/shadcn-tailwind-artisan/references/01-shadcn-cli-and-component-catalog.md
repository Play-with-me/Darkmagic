# Playbook 01: shadcn/ui CLI & Component Catalog

Use this playbook to scaffold and customize shadcn/ui components cleanly.

---

## 1. Standard Component Add Commands

```bash
# Core interactive elements
npx shadcn@latest add button dialog sheet dropdown-menu tooltip

# Forms & Inputs
npx shadcn@latest add form input select textarea checkbox switch label

# Data Presentation & Layout
npx shadcn@latest add table card badge avatar tabs separator scroll-area
```

---

## 2. Form Handling Pattern (`react-hook-form` + `zod`)

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2, { message: 'Tên phải có ít nhất 2 ký tự' }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên người dùng</FormLabel>
              <FormControl>
                <Input placeholder="kyuu4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Lưu thông tin</Button>
      </form>
    </Form>
  );
}
```
