import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuclientesPageRoutingModule } from './usuclientes-routing.module';

import { UsuclientesPage } from './usuclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuclientesPageRoutingModule
  ],
  declarations: [UsuclientesPage]
})
export class UsuclientesPageModule {}
