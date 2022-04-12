import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),

  })

  constructor(public auth: FirebaseService, public app: AppComponent, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  }

  login(): void {
    this.app.onSignin(this.loginForm.value.email, this.loginForm.value.password);
  }
}

