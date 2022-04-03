import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { FooterComponent } from './core/footer/footer.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCv91-L5tZhGbQMdF3qIBm-DWl5SCkS4LI',
      authDomain: 'autocars-b8a71.firebaseapp.com',
      projectId: 'autocars-b8a71',
      storageBucket: 'autocars-b8a71.appspot.com',
      messagingSenderId: '681345138045',
      appId: '1:681345138045:web:c53bfddb703466f936e014',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
