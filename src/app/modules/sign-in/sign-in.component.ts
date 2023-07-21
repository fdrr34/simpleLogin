import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signUserData } from '../models/sign-in.model';
import { authService } from '../services/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent {
  constructor(private authService: authService) {}

  onSubmit() {
    const formValue = this.signInForm.value;
    if (this.signInForm.value.rules) {
      const signData: signUserData = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        phone: formValue.phone,
        password: formValue.password
      };
      this.authService.doSignIn(signData).subscribe({
        next:()=>{

        }
      })
    }
  }

  navigateToLogin() {}

  signInForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required),
    rules: new FormControl('',Validators.required),
  });
}
