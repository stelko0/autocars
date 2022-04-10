import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCarComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [],
  providers: [],
})
export class FeatureModule {}
