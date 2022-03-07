import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuventasPageRoutingModule } from './usuventas-routing.module';

import { UsuventasPage } from './usuventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuventasPageRoutingModule
  ],
  declarations: [UsuventasPage]
})
export class UsuventasPageModule {}
