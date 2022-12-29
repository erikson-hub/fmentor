import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';
import { DestinationModule } from './destination/destination.module';
import { HomeModule } from './home/home.module';
import { TechnologyModule } from './technology/technology.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    DestinationModule,
    CrewModule,
    TechnologyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
