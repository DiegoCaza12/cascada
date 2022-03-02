import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclientePageRoutingModule } from './recliente-routing.module';

import { ReclientePage } from './recliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclientePageRoutingModule
  ],
  declarations: [ReclientePage]
})
export class ReclientePageModule {}
