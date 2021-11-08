import { Component, OnInit } from '@angular/core';
import { Auth, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userSignedIn = false;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    user(this.auth).subscribe((user) => {
      // Sets userSignedIn to true if the user object exits otherwise sets it to false
      user ? (this.userSignedIn = true) : (this.userSignedIn = false);
    });
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
    }
  }
}
