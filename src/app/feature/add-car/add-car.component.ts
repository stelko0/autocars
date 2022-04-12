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
    brand: new FormControl(null, [Validators.required]),
    model: new FormControl(null, [Validators.required]),
    millage: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl(null, [
      Validators.required,
    ]),
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  addCar(): void {
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
