import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'scout' },
  {
    path: 'scout',
    loadChildren: () => import('./features/scout/scout.routes').then((m) => m.scoutRoutes),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.routes').then((m) => m.contactsRoutes),
  },
];
