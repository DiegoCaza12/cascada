import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MproductoPageRoutingModule } from './mproducto-routing.module';

import { MproductoPage } from './mproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MproductoPageRoutingModule
  ],
  declarations: [MproductoPage]
})
export class MproductoPageModule {}
