import { z } from 'zod';
import { nameSchema, emailSchema, phoneSchema, privacySchema } from './shared';

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  service: z.string().min(1, 'Lütfen bir hizmet seçin.'),
  message: z.string().trim()
    .min(10, 'Mesajınız en az 10 karakter olmalı.')
    .max(2000, 'Mesajınız en fazla 2000 karakter olabilir.'),
  privacy: privacySchema,
});
