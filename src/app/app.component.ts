import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'autocars';
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService, public router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  async onSignup(email: string, password: string, repass: string) {
    await this.firebaseService.signup(email, password, repass);
    if (password == repass) {
      if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
      // this.router.navigate(['/home']);
    } 
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
      if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
      // this.router.navigate(['/home']);  

  }
  handleLogout() {
    this.isSignedIn = false;
  }
}