import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcproductoPageRoutingModule } from './acproducto-routing.module';

import { AcproductoPage } from './acproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcproductoPageRoutingModule
  ],
  declarations: [AcproductoPage]
})
export class AcproductoPageModule {}
