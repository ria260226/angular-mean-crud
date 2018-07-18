import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { routing }       from './auth.routes';
import { UserService } from './service/userService/user_service';
import { AuthGuard } from './service/authGuardPublicPages/authGuardPublic.service';
import { AuthPublicPagesService } from './service/authGuardPublicPages/authPublic.service';

// import { Login } from './components/login/login.component'
// import { LogoutComponent } from './components/logout/logout.component'
// import { RecoverComponent } from './components/recover/recover.component'
// import { Register } from './components/register/register.component'
// import { ResetComponent } from './components/reset/reset.component'

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    // Login,
    // LogoutComponent,
    // RecoverComponent,
    // Register,
    // ResetComponent,
  ],
  providers: [
    AuthGuard,
        UserService,
    AuthPublicPagesService
  ],
})
export class AdminAuthModule { }
