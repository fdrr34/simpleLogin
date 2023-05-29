import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('it works');
  }

  signInForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    rules: new FormControl(''),
  });
}
