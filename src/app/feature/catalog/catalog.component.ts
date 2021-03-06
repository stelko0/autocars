import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import  firebase  from 'firebase/compat/app';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  public cars: any;
  public carId: any;
  public emptyBase: any
  constructor() {}

  ngOnInit(): void {
    firebase
      .database()
      .ref('/cars')
      .once('value')
      .then((snapshot) => {
        if (snapshot.val() == null) {
          this.emptyBase = true;
        } else {
          this.emptyBase = false;
          this.cars = Object.values(snapshot.val());
        }

      });
  }

  // getData() {
  //   // const cars = [];

  //   firebase.database().ref('/cars').once('value').then((snapshot) => {
  //     const cars = snapshot.val();
  //     return cars;
  //       })
  // }
}
