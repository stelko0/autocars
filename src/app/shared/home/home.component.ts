import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public count: any;
  constructor() {}

  ngOnInit(): void {
    firebase
      .database()
      .ref('/cars')
      .once('value')
      .then((snapshot) => {
        this.count = Object.keys(snapshot.val()).length;
        
        
      });
  }
}
