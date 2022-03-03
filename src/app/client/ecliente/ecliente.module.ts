import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EclientePageRoutingModule } from './ecliente-routing.module';

import { EclientePage } from './ecliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EclientePageRoutingModule
  ],
  declarations: [EclientePage]
})
export class EclientePageModule {}
