import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  signInWithEmailAndPassword,
  Auth,
  AuthError,
} from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private auth: Auth,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  async signIn() {
    try {
      await signInWithEmailAndPassword(
        this.auth,
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      console.log('User signed in sucessfully!');
      this.router.navigate(['/', 'dashboard']);
    } catch (error) {
      let err = error as AuthError;
      console.error(err);
    }
  }
}
