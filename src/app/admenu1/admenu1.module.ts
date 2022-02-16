import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admenu1PageRoutingModule } from './admenu1-routing.module';

import { Admenu1Page } from './admenu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admenu1PageRoutingModule
  ],
  declarations: [Admenu1Page]
})
export class Admenu1PageModule {}
