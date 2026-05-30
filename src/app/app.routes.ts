import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services')
        .then(m => m.Services)
  },
  {
    path: 'process',
    loadComponent: () =>
      import('./pages/process/process')
        .then(m => m.Process)
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing')
        .then(m => m.Pricing)
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio')
        .then(m => m.Portfolio)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about')
        .then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact')
        .then(m => m.Contact)
  },

  // fallback route
  {
    path: '**',
    redirectTo: ''
  }
];