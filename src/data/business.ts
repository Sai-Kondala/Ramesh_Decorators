/**
 * Business Configuration for Ramesh Decorators
 * 
 * Update contact details, addresses, and social handles in this single file.
 * Any unconfigured placeholder value is handled gracefully across the UI.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  phone: {
    display: string; // e.g. "+91 98XXX XXXXX"
    raw: string;     // e.g. "+919800000000" for tel: links
  };
  whatsapp: {
    display: string;
    number: string;  // Country code without '+' or spaces, e.g. "919800000000"
    defaultMessage: string;
  };
  email: {
    address: string;
    subject: string;
    defaultBody: string;
  };
  location: {
    display: string;
    city: string;
    state: string;
    country: string;
    mapsUrl: string; // Google Maps URL or search query
  };
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    whatsappCommunity?: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: "Ramesh Decorators",
  tagline: "Event Decoration & Planning Services",
  shortDescription: "Beautiful wedding decorations, elegant event styling and complete planning services to make your celebrations more special and memorable.",
  longDescription: "Ramesh Decorators is dedicated to creating beautiful and unforgettable experiences through exceptional event decoration and planning services. From intimate gatherings to grand weddings, we bring your vision to life with creativity, quality and attention to detail.",
  phone: {
    display: "+91 98858 87171",
    raw: "+919885887171",
  },
  whatsapp: {
    display: "+91 98858 87171",
    number: "919885887171",
    defaultMessage: "Hello Ramesh Decorators, I would like to enquire about your event decoration services.",
  },
  email: {
    address: "rameshdecorators@gmail.com",
    subject: "Event Decoration Enquiry",
    defaultBody: "Hello Ramesh Decorators team,\n\nI am reaching out to enquire about event decoration and styling services for my upcoming celebration.\n\nPlease share your packages and availability.",
  },
  location: {
    display: "Bodasingipeta, Gajapatinagaram, Kanimeraka, Andhra Pradesh 535270",
    city: "Gajapatinagaram",
    state: "Andhra Pradesh",
    country: "India",
    mapsUrl: "https://maps.app.goo.gl/QK5M8UhRK41cNo1U8",
  },
  socials: {
    instagram: "https://instagram.com/rameshdecorators",
    facebook: "https://facebook.com/rameshdecorators",
    youtube: "https://youtube.com/@rameshdecorators",
    whatsappCommunity: "https://wa.me/919885887171",
  },
};

/**
 * Builds a direct WhatsApp click-to-chat URL with a pre-filled encoded message.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage || businessConfig.whatsapp.defaultMessage);
  return `https://wa.me/${businessConfig.whatsapp.number}?text=${msg}`;
}

/**
 * Builds a direct tel: phone call link.
 */
export function getPhoneTelUrl(): string {
  return `tel:${businessConfig.phone.raw}`;
}

/**
 * Builds a mailto: link with pre-filled subject and body.
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const s = encodeURIComponent(subject || businessConfig.email.subject);
  const b = encodeURIComponent(body || businessConfig.email.defaultBody);
  return `mailto:${businessConfig.email.address}?subject=${s}&body=${b}`;
}
