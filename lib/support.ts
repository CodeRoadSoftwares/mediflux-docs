export const WHATSAPP_MESSAGE =
  "Hi, I'm using the MediFlux and need help. Could you please assist me?";

export const SUPPORT_CONTACTS = [
  {
    id: "phone",
    title: "Phone",
    description: "+91 91036 67857",
    href: "tel:+919103667857",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "+91 91036 67857",
    href: `https://wa.me/919103667857?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
  {
    id: "email",
    title: "Email",
    description: "support@mflx.in",
    href: "mailto:support@mflx.in",
  },
] as const;

export type SupportContactId = (typeof SUPPORT_CONTACTS)[number]["id"];
