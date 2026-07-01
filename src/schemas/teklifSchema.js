import { z } from 'zod';
import { nameSchema, emailSchema, phoneSchema, privacySchema } from './shared';

const step1Schema = z.object({
  services: z.array(z.string()).min(1, 'En az bir hizmet seçin.'),
});

const step2Schema = z.object({
  budget: z.string().min(1, 'Bütçe aralığı seçin.'),
  timeline: z.string().min(1, 'Zaman çizelgesi seçin.'),
});

const step3Schema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: z.string().trim().max(50, 'Şirket adı en fazla 50 karakter olabilir.').optional().or(z.literal('')),
  website: z.string().trim()
    .regex(/^https?:\/\/.+\..+/, 'Geçerli bir URL girin. (örn. https://sirket.com)')
    .optional().or(z.literal('')),
  message: z.string().trim().max(300, 'Mesaj en fazla 300 karakter olabilir.').optional().or(z.literal('')),
  privacy: privacySchema,
});

export const teklifStepSchemas = { 1: step1Schema, 2: step2Schema, 3: step3Schema };
export const teklifFullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
