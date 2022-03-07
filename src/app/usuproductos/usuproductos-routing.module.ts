import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuproductosPage } from './usuproductos.page';

const routes: Routes = [
  {
    path: '',
    component: UsuproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuproductosPageRoutingModule {}
