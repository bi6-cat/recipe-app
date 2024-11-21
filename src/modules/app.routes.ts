import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './shared/customer-layout/customer-layout.component';
import { MasterLayoutComponent } from './shared/master-layout/master-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    // Auth Page
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    // Master Page
    path: 'master',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterModule),
  },
  {
    // Home Page
    path: '',
    component: CustomerLayoutComponent,
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
];
