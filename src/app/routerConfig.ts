// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { Login } from './components/login/login.component';
import { Register } from './components/register/register.component';
export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  { path: 'login',
    component: Login
  },
  { path: 'register',
    component: Register
  }
];