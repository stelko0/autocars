import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public auth: FirebaseService) {}

  get isLogged() {
    return this.auth.getUser().isAnonymous;
  }
  ngOnInit(): void {
    // console.log(this.isLogged);
  }
}
