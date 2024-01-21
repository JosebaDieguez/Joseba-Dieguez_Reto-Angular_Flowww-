import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibTarjetaModule } from '../../projects/lib-tarjeta/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibTarjetaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
