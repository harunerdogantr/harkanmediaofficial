export function validateName(value) {
  if (!value.trim()) return 'İsim zorunludur.';
  if (value.trim().length < 2) return 'İsim en az 2 karakter olmalıdır.';
  if (value.trim().length > 50) return 'İsim en fazla 50 karakter olabilir.';
  if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(value.trim())) return 'İsim yalnızca harf içerebilir.';
  return null;
}

export function validateEmail(value) {
  if (!value.trim()) return 'E-posta zorunludur.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Geçerli bir e-posta girin.';
  return null;
}

export function validatePhone(value) {
  if (!value.trim()) return 'Telefon zorunludur.';
  const digits = value.replace(/\D/g, '');
  if (digits.length < 10) return 'Telefon numarası en az 10 rakam olmalıdır.';
  if (digits.length > 15) return 'Telefon numarası en fazla 15 rakam olabilir.';
  return null;
}

export function validateCompany(value) {
  if (!value.trim()) return null;
  if (value.trim().length > 50) return 'Şirket adı en fazla 50 karakter olabilir.';
  return null;
}

export function validateWebsite(value) {
  if (!value.trim()) return null;
  if (!/^https?:\/\/.+\..+/.test(value.trim())) return 'Geçerli bir URL girin. (örn. https://sirket.com)';
  return null;
}

export function validateMessage(value, max = 300) {
  if (!value.trim()) return null;
  if (value.trim().length > max) return `Mesaj en fazla ${max} karakter olabilir.`;
  return null;
}
