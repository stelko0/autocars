import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public car: any;
  public isOwner: any;
  constructor() {}
  
  ngOnInit(): void {
    let currUser = '';
    if (localStorage.getItem('user')) {
       currUser = JSON.parse(localStorage.getItem('user')!).email;
    }
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);

    const dbRef = ref(getDatabase());
    get(child(dbRef, `cars/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.car = snapshot.val();
          if (this.car.user == currUser) {
            this.isOwner = true;
          } else {
            this.isOwner = false;
          }
        } else {
          console.log('No data available');
        }
      })
      
    }
  }
