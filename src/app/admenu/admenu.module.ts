import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmenuPageRoutingModule } from './admenu-routing.module';

import { AdmenuPage } from './admenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmenuPageRoutingModule
  ],
  declarations: [AdmenuPage]
})
export class AdmenuPageModule {}
