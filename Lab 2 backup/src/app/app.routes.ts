import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'event-details',
    loadComponent: () => import('./event-details/event-details.page').then( m => m.EventDetailsPage)
  },
  {
    path: 'comedy-details',
    loadComponent: () => import('./comedy-details/comedy-details.page').then( m => m.ComedyDetailsPage)
  },
];
