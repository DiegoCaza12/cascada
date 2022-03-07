import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuproductosPageRoutingModule } from './usuproductos-routing.module';

import { UsuproductosPage } from './usuproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuproductosPageRoutingModule
  ],
  declarations: [UsuproductosPage]
})
export class UsuproductosPageModule {}
