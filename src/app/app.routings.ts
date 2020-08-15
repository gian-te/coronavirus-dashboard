import { Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import(`./feature/dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path: 'countries',
    loadChildren: () => import(`./feature/countries/countries.module`).then(m => m.CountriesModule)
  },
];

