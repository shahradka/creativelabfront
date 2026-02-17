import { permissions } from './permissions';

export const MenuItems = [
  { id: '1', label: 'Frontend', href: '/frontend', parentId: null, permission: permissions.PUBLIC },
  {
    id: '11',
    label: 'React',
    href: '/frontend/react',
    parentId: '1',
    permission: permissions.PUBLIC,
  },
  {
    id: '12',
    label: 'Next.js',
    href: '/frontend/next',
    parentId: '1',
    permission: permissions.PUBLIC,
  },
  {
    id: '13',
    label: 'Nuxt.js',
    href: '/frontend/nuxt',
    parentId: '1',
    permission: permissions.PUBLIC,
  },
  { id: '2', label: 'Backend', href: '/backend', parentId: null, permission: permissions.PUBLIC },
  {
    id: '21',
    label: 'Nest.js',
    href: '/frontend/nest',
    parentId: '2',
    permission: permissions.PUBLIC,
  },
  { id: '22', label: 'Java', href: '', parentId: '2', permission: permissions.PUBLIC },
  { id: '23', label: 'Python', href: '', parentId: '2', permission: permissions.PUBLIC },
  { id: '3', label: 'Design', href: '/design', parentId: null, permission: permissions.PUBLIC },
  { id: '31', label: 'CV', href: '/design/cv', parentId: '3', permission: permissions.PUBLIC },
  { id: '4', label: 'Other', href: '/other', parentId: null, permission: permissions.PUBLIC },
  { id: '41', label: 'AI', href: '/other/ai', parentId: '4', permission: permissions.PUBLIC },
];
