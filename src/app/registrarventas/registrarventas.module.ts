import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarventasPageRoutingModule } from './registrarventas-routing.module';

import { RegistrarventasPage } from './registrarventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarventasPageRoutingModule
  ],
  declarations: [RegistrarventasPage]
})
export class RegistrarventasPageModule {}
