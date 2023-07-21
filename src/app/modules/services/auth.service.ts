import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { signUserData } from '../models/sign-in.model'

@Injectable()
export class authService {
  constructor(private http: HttpClient) {}

  doLogin(userData: any) {}

  doForgetPass() {}

  doRoutToSignPage() {}

  doSignIn(signUserData:signUserData) {
    const SignUrl = 'api/testSign'
    return this.http.post(SignUrl,signUserData)
  }
}
