import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn: boolean = false;
  passError: boolean = true; // trqbvashe da raboti ama ne uspqh da go napravq sorry ;*
  constructor(public firebaseAuth: AngularFireAuth, public router: Router) {}

  async signin(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/home']);
      });
  }

  async signup(email: string, password: string, repass: string) {
    if (password == repass) {
      await this.firebaseAuth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/home']);
        });
    } else {
      this.passError = true; // trqbvashe da raboti ama ne uspqh da go napravq sorry ;* nqmam dostatuchno vreme
    }
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    // localStorage.clear();
    console.log('LOGOUT');

    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
