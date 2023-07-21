import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authService } from '../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService:authService) {}

  loginEntries = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  ngOnInit() {}

  doLogin() {
    console.log('it works');

  }

  doLinksHandlers(command: string) {
    switch (command) {
      case 'sign-in':
        console.log('sign-in');

        break;
      case 'forget-password':
        console.log('forget-password');

        break;
    }
  }
}
