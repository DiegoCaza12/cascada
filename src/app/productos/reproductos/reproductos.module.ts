import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproductosPageRoutingModule } from './reproductos-routing.module';

import { ReproductosPage } from './reproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproductosPageRoutingModule
  ],
  declarations: [ReproductosPage]
})
export class ReproductosPageModule {}
