import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsumenuPageRoutingModule } from './usumenu-routing.module';

import { UsumenuPage } from './usumenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsumenuPageRoutingModule
  ],
  declarations: [UsumenuPage]
})
export class UsumenuPageModule {}
