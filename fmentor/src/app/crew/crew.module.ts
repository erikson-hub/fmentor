import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts/texts.component';
import { ImageComponent } from './image/image.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [TextsComponent, ImageComponent, ResultComponent],
  imports: [CommonModule],
  exports: [ImageComponent, TextsComponent, ResultComponent],
})
export class CrewModule {}
