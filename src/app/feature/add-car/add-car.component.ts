import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { getDatabase,ref, set } from 'firebase/database';
// const database = getDatabase();

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  carFormGroup: FormGroup = this.formBuilder.group({
    brand: new FormControl("", [Validators.required, Validators.minLength(1)]),
    model: new FormControl("", [Validators.required, Validators.minLength(1)]),
    millage: new FormControl('', [Validators.required, Validators.min(1)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl("", [
      Validators.required, Validators.minLength(1)
    ]),
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  addCar(): void {
    if (
      this.carFormGroup.value.brand.length < 2 ||
      this.carFormGroup.value.model.length < 2 ||
      this.carFormGroup.value.millage.length < 2 ||
      this.carFormGroup.value.price.length < 2 ||
      this.carFormGroup.value.description.length < 2
    ) {
      return;
    } else {
      const carId = `${Math.floor(Math.random() * 10000)}-${Math.floor(
        Math.random() * 10000
      )}`;
    const db = getDatabase();
    const user = JSON.parse(localStorage.getItem('user')!);

    set(ref(db, 'cars/' + carId), {
      carId: carId,
      user: user.email,
      brand: this.carFormGroup.value.brand,
      model: this.carFormGroup.value.model,
      millage: Number(this.carFormGroup.value.millage),
      price: Number(this.carFormGroup.value.price),
      description: this.carFormGroup.value.description
    });
    this.router.navigate(['home']);
    }
  }
}
