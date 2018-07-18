import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgaModule } from '../../theme/nga.module';
import { Login } from './login.component';
import { routing }       from './login.routing';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { LoginModal } from '../loginModal/login-modal.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // NgaModule,
    // NgbModalModule,
    routing
  ],
  declarations: [
    Login
  ],
   entryComponents: [
   // LoginModal
  ],
})
export class LoginModule {}
   
  

