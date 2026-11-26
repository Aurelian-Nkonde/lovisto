// Every fact in this file comes from the Lovisto Tours company profile PDF.
// [TO BE CONFIRMED BY CLIENT] marks information the PDF does not supply.

export const site = {
  name: 'Lovisto Tours Transport & Enterprise',
  short: 'Lovisto Tours',
  tagline: 'Where Experiences Matter',
  motto: 'You’ll never regret being a touring addict',
  established: 2014,
  founder: 'Thusho Monnagaratoe',
  phone: '+27 847 815 943',
  phoneHref: 'tel:+27847815943',
  tel: '+27 183 832 658',
  telHref: 'tel:+27183832658',
  whatsapp: '27847815943',
  email: 'info@lovistotours.co.za',
  address: {
    street: 'Stand no 12041, Lomanyaneng Village',
    city: 'Mahikeng',
    region: 'North West',
    country: 'South Africa',
    postal: 'P.O. Box 2601, Mahikeng, 2745',
  },
} as const;

/** WhatsApp deep link. All text is encoded; no tracking parameters are added. */
export const waLink = (text = 'Hi Lovisto Tours, I would like a quote.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export interface Credential {
  label: string;
  detail: string;
}

export const credentials: Credential[] = [
  {
    label: 'Tourist transport operator',
    detail: 'Accredited by the National Public Transport Regulator · ACC25060001194 · valid to 18 June 2030',
  },
  { label: 'BBBEE Level 1', detail: '100% youth- and black-owned' },
  { label: 'Central Supplier Database', detail: 'MAAAA0007621' },
  { label: 'Established 2014', detail: 'Company registration no. 2014/089906/07' },
  {
    label: 'Industry membership',
    detail: 'Tourism Association of Mahikeng (TAMAH) · Small Tourism Enterprise Association',
  },
];

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/track-record', label: 'Track record' },
  { href: '/about', label: 'About' },
  { href: '/procurement', label: 'Procurement' },
  { href: '/contact', label: 'Contact' },
];

export const utilityNav: NavItem[] = [
  { href: '/contact', label: 'Request a quote' },
];
