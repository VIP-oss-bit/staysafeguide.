export const SITE = {
  name: 'Stay Safe Guide',
  domain: 'staysafeguide.com',
  url: 'https://staysafeguide.com',
  title: 'Stay Safe Guide — Plain-English Online Safety',
  description:
    'Clear, no-jargon guides to staying safe online: spotting scams, choosing a VPN, using a password manager, and locking down your accounts and devices.',
  author: 'Iulian Pais',
  locale: 'en_GB',
};

// Top navigation
export const NAV = [
  { label: 'Scams & Fraud', href: '/topics/scams-fraud/' },
  { label: 'VPNs & Privacy', href: '/topics/vpns-privacy/' },
  { label: 'Passwords', href: '/topics/password-managers/' },
  { label: 'Devices & Accounts', href: '/topics/device-account-security/' },
  { label: 'About', href: '/about/' },
];

// The four content clusters. `name` must match the `cluster` field used in
// article frontmatter. `accent` colour-codes each section across the site.
export const CLUSTERS = [
  {
    name: 'Scams & fraud',
    slug: 'scams-fraud',
    icon: '⚠️',
    accent: '#e11d48',
    blurb:
      'Spot scams before they cost you, and know exactly what to do if you have already been caught out.',
  },
  {
    name: 'VPNs & privacy',
    slug: 'vpns-privacy',
    icon: '🔒',
    accent: '#0d9488',
    blurb: 'Whether you actually need a VPN, and how to choose one without overpaying.',
  },
  {
    name: 'Password managers',
    slug: 'password-managers',
    icon: '🔑',
    accent: '#7c3aed',
    blurb: 'Stop reusing passwords. Simple tools that make strong passwords effortless.',
  },
  {
    name: 'Device & account security',
    slug: 'device-account-security',
    icon: '📱',
    accent: '#2563eb',
    blurb: 'Lock down your phone, computer, email and the accounts that matter most.',
  },
];
