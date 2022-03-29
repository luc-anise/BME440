import { Component, OnInit } from '@angular/core';
import { Auth, AuthError, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: Auth) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {}

  // Use the signup form to create a new user using firebase auth
  async signup() {
    try {
      await createUserWithEmailAndPassword(this.auth,
        this.signupForm.value.email,
        this.signupForm.value.password
      );
      console.log('User created sucessfully!');
    } catch (error) {
      let err = error as AuthError;
      console.error(err);
    }
  }
}
