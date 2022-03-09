import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmregistrovenPageRoutingModule } from './admregistroven-routing.module';

import { AdmregistrovenPage } from './admregistroven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmregistrovenPageRoutingModule
  ],
  declarations: [AdmregistrovenPage]
})
export class AdmregistrovenPageModule {}
