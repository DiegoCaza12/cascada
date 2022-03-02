import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusuariosPageRoutingModule } from './musuarios-routing.module';

import { MusuariosPage } from './musuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusuariosPageRoutingModule
  ],
  declarations: [MusuariosPage]
})
export class MusuariosPageModule {}
