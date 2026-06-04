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
// article frontmatter so topic pages can group articles correctly.
export const CLUSTERS = [
  {
    name: 'Scams & fraud',
    slug: 'scams-fraud',
    blurb:
      'Spot scams before they cost you, and know exactly what to do if you have already been caught out.',
  },
  {
    name: 'VPNs & privacy',
    slug: 'vpns-privacy',
    blurb: 'Whether you actually need a VPN, and how to choose one without overpaying.',
  },
  {
    name: 'Password managers',
    slug: 'password-managers',
    blurb: 'Stop reusing passwords. Simple tools that make strong passwords effortless.',
  },
  {
    name: 'Device & account security',
    slug: 'device-account-security',
    blurb: 'Lock down your phone, computer, email and the accounts that matter most.',
  },
];
