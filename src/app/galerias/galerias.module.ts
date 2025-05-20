import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriasRoutingModule } from './galerias-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriasRoutingModule
  ]
})
export class GaleriasModule { }
