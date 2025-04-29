import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]
