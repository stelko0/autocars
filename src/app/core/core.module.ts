import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent, HeaderComponent
  ],
  imports: [NgModule,
    CommonModule,
    HeaderComponent, FooterComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders<CoreModule>{
    return {
      ngModule: CoreModule,
      providers: [
        
      ]
    }
  }
}
