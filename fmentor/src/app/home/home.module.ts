import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [NavbarComponent, BodyComponent, ResultComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, BodyComponent, ResultComponent],
})
export class HomeModule {}
