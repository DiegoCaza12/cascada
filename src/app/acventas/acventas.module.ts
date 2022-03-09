import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcventasPageRoutingModule } from './acventas-routing.module';

import { AcventasPage } from './acventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcventasPageRoutingModule
  ],
  declarations: [AcventasPage]
})
export class AcventasPageModule {}
