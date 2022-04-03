import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {


  constructor(public app: AppComponent, public auth: FirebaseService) {}
  ngOnInit(): void {
    
  }
}
