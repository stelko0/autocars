import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),
    rePassword: new FormControl(null, Validators.required),
  });

  constructor(
    public auth: FirebaseService,
    public app: AppComponent,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register(): void {
    this.app.onSignup(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.rePassword);
  }
}
