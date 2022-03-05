import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReventaPageRoutingModule } from './reventa-routing.module';

import { ReventaPage } from './reventa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReventaPageRoutingModule
  ],
  declarations: [ReventaPage]
})
export class ReventaPageModule {}
