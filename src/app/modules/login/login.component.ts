import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  Auth,
  AuthError,
} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: Auth) {}

  ngOnInit(): void {}

  async signIn() {
    try {
      await signInWithEmailAndPassword(
        this.auth,
        'luc.anis@stonybrook.edu',
        'password1'
      );
      console.log('User signed in sucessfully!');
      this.router.navigate(['/', 'dashboard']);
    } catch (error) {
      let err = error as AuthError;
      console.error(err);
    }
  }
}
