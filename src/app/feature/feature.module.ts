import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [AddCarComponent, CatalogComponent, DetailsComponent, EditComponent, DeleteComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  exports: [],
  providers: [],
})
export class FeatureModule {}
