import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcproductoPage } from './acproducto.page';

const routes: Routes = [
  {
    path: '',
    component: AcproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcproductoPageRoutingModule {}
