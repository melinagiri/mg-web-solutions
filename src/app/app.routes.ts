import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'MG Web Solutions – Digital Experiences That Grow Businesses',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About – MG Web Solutions',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    title: 'Services – MG Web Solutions',
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing),
    title: 'Pricing – MG Web Solutions',
  },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process').then((m) => m.Process),
    title: 'Our Process – MG Web Solutions',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Projects – MG Web Solutions',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact – MG Web Solutions',
  },
  { path: '**', redirectTo: '' },
];
