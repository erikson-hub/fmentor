import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    BodyComponent,
    NavComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyComponent,
    NavComponent,
  ]
})
export class DestinationModule { }
