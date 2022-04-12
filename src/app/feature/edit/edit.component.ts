import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, child, get, set } from 'firebase/database';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  public url = window.location.pathname;
  public id = this.url.substring(this.url.lastIndexOf('/') + 1);
  public car: any;


  constructor(private router: Router) {}

  ngOnInit(): void {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `cars/${this.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.car = snapshot.val();
      } else {
        console.log('No data available');
      }
    });
  }

  editCar(): void {
    let brand = (<HTMLInputElement>document.getElementById('brand')).value;
    let model = (<HTMLInputElement>document.getElementById('model')).value;
    let millage = (<HTMLInputElement>document.getElementById('millage')).value;
    let price = (<HTMLInputElement>document.getElementById('price')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;

    const db = getDatabase();

    set(ref(db, 'cars/' + this.id), {
      brand: brand,
      model: model,
      millage: millage,
      price: price,
      carId: this.car.carId,
      user: this.car.user,
      description: description
    });
    this.router.navigate(['catalog']);
  }
}
