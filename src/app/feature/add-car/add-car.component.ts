import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  carFormGroup: FormGroup = this.formBuilder.group({
    "brand": new FormControl('', [Validators.required]),
    "model": new FormControl('', [Validators.required]),
    "millage": new FormControl('', [Validators.required]),
    "price": new FormControl('', [Validators.required, Validators.min(0)],),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  addCar(): void {
    let myform = this.carFormGroup;
    if(myform.value.price < 0) {
      document.getElementById('price')?.style.border = "2px solid red";
    }
  }
}
