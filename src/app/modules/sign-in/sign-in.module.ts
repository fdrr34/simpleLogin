import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRouteModule } from './sign-in-route.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { authService } from '../services/auth.service';

@NgModule({
  declarations: [SignInComponent],
  exports: [SignInComponent],
  imports: [
    CommonModule,
    SignInRouteModule,
    ReactiveFormsModule
  ],
  providers:[authService]
})
export class SignInModule { }
