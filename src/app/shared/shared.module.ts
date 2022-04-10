import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
