import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'animes',
    loadChildren: () =>
      import('./pages/animes/animes.module').then((m) => m.AnimesModule),
  },
  { path: '**', redirectTo: '' },
];
