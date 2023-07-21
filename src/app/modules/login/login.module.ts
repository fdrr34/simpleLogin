import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-route.module';
import { authService } from '../services/auth.service';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [authService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule { }
