import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}


  loginEntries = new FormGroup({
    email: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  });

  ngOnInit() {}

  doLogin() {
    console.log('it works')
  }
}
