import { z } from 'zod';

// Byte-identical to src/utils/validators.js — do not "improve" these
// without a product decision, since e.g. z.string().email() is stricter
// than the current permissive email regex and would reject previously-valid input.
export const nameSchema = z.string()
  .trim()
  .min(2, 'İsim en az 2 karakter olmalıdır.')
  .max(50, 'İsim en fazla 50 karakter olabilir.')
  .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, 'İsim yalnızca harf içerebilir.');

export const emailSchema = z.string()
  .min(1, 'E-posta zorunludur.')
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Geçerli bir e-posta girin.');

export const phoneSchema = z.string()
  .min(1, 'Telefon zorunludur.')
  .transform((v) => v.replace(/\D/g, ''))
  .refine((v) => v.length >= 10, 'Telefon numarası en az 10 rakam olmalıdır.')
  .refine((v) => v.length <= 15, 'Telefon numarası en fazla 15 rakam olabilir.');

export const privacySchema = z.literal(true, {
  errorMap: () => ({ message: 'Gizlilik politikasını kabul etmelisiniz.' }),
});

// Honeypot is kept OUTSIDE any schema, checked pre-parse exactly like
// today's `if (form._hp) return;` guard — silent no-op, never shown as an error.
export function isHoneypotFilled(form) {
  return Boolean(form._hp);
}
