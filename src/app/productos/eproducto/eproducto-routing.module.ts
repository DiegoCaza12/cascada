import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EproductoPage } from './eproducto.page';

const routes: Routes = [
  {
    path: '',
    component: EproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EproductoPageRoutingModule {}
