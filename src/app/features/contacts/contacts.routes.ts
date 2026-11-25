import { Routes } from '@angular/router';

export const contactsRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contact' },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
];
