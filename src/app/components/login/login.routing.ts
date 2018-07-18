import { Routes, RouterModule }  from '@angular/router';
// import { ForgotPassword } from './components/forgotpassword/forgot-password.component';
import { Login } from './login.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Login
  },

  //   {
  //   path: 'forgot-password',
  //   component:ForgotPassword
  // }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
