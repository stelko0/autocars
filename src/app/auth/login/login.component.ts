import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public auth: FirebaseService, public app: AppComponent, public router: Router) {}

  ngOnInit(): void {
  }
}

