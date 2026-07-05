import type { Certification } from '@/types/content';

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Certification Name',
    issuer: 'Issuing Body (e.g. AWS, Google, Meta)',
    date: '2024-03-01',
    credentialUrl: 'https://example.com/credential',
  },
  {
    id: 'cert-2',
    title: 'Another Certification',
    issuer: 'Platform Name',
    date: '2023-11-01',
    credentialUrl: 'https://example.com/credential-2',
  },
];
