import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { environment } from '../../../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

  ]
})
export class LoginModule { }
