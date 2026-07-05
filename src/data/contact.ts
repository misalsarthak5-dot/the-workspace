export interface ContactDetail {
  type: string;
  value: string;
  label: string;
  url: string;
  icon: string; // Lucide icon
}

export const contactDetails: ContactDetail[] = [
  {
    type: 'Email',
    value: 'sarthak.misal@example.com',
    label: 'Send Email',
    url: 'mailto:sarthak.misal@example.com',
    icon: 'Mail',
  },
  {
    type: 'GitHub',
    value: 'github.com/sarthakmisal',
    label: 'View Profile',
    url: 'https://github.com/sarthakmisal',
    icon: 'Github',
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/sarthakmisal',
    label: 'Connect',
    url: 'https://linkedin.com/in/sarthakmisal',
    icon: 'Linkedin',
  },
  {
    type: 'Location',
    value: 'India',
    label: 'Location',
    url: 'https://maps.google.com/?q=India',
    icon: 'MapPin',
  },
];
