import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EproductoPageRoutingModule } from './eproducto-routing.module';

import { EproductoPage } from './eproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EproductoPageRoutingModule
  ],
  declarations: [EproductoPage]
})
export class EproductoPageModule {}
