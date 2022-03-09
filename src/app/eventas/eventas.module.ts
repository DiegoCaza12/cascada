import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventasPageRoutingModule } from './eventas-routing.module';

import { EventasPage } from './eventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventasPageRoutingModule
  ],
  declarations: [EventasPage]
})
export class EventasPageModule {}
