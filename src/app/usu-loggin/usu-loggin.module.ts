import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuLogginPageRoutingModule } from './usu-loggin-routing.module';

import { UsuLogginPage } from './usu-loggin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuLogginPageRoutingModule
  ],
  declarations: [UsuLogginPage]
})
export class UsuLogginPageModule {}
