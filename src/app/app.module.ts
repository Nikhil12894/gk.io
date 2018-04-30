import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }