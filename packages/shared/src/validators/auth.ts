import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'ชื่อร้านต้องมีอย่างน้อย 2 ตัวอักษร'),
  ownerName: z.string().min(2, 'ชื่อเจ้าของร้านต้องมีอย่างน้อย 2 ตัวอักษร'),
  email: z.string().email('อีเมลไม่ถูกต้อง'),
  password: z.string().min(8, 'รหัสผ่านอย่างน้อย 8 ตัวอักษร')
});

export const loginSchema = z.object({
  email: z.string().email('อีเมลไม่ถูกต้อง'),
  password: z.string().min(1, 'กรุณากรอกรหัสผ่าน')
});
