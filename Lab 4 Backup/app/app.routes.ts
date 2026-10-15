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
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'student-details',
    loadComponent: () => import('./student-details/student-details.page').then( m => m.StudentDetailsPage)
  },
  // {
  //   path: 'student-details/:sid',
  //   loadComponent: () => import('./student-details/student-details.page').then( m => m.StudentDetailsPage)
  // },
];
