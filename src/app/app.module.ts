import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminAuthModule } from './auth/auth.module';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { Login } from './components/login/login.component';
import { Register } from './components/register/register.component';
import { appRoutes } from './routerConfig';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ProductService } from './product.service';

import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    AdminAuthModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatPaginatorModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
