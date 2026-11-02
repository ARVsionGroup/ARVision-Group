export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://arvision.in'
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'support@arvision.in'
export const CONTACT_PHONES = [
  import.meta.env.VITE_CONTACT_PHONE || '9031743377',
  import.meta.env.VITE_CONTACT_PHONE_SECONDARY || '8617284363',
].map((number) => ({ value: number, href: `tel:${number}` }))
