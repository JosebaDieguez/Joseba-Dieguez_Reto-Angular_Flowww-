import { NgModule } from '@angular/core';
import { LibTarjetaComponent } from './lib-tarjeta.component';
import { SkeletonModule } from 'primeng/skeleton';
import { GalleriaModule } from 'primeng/galleria';
import { PanelModule } from 'primeng/panel';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    LibTarjetaComponent
  ],
  imports: [
    SkeletonModule,
    GalleriaModule,
    PanelModule,
    BrowserAnimationsModule,
    BrowserModule,
    CardModule,
    ButtonModule,
    ImageModule,
    BadgeModule
  ],
  exports: [
    LibTarjetaComponent
  ]
})
export class LibTarjetaModule { }
