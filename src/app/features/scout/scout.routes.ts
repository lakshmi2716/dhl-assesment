import { Routes } from '@angular/router';

export const scoutRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: 'overview',
    title: 'Scout overview',
    loadComponent: () => import('./pages/overview/overview').then((m) => m.Overview),
  },
];
