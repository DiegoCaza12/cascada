import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuventasPage } from './usuventas.page';

const routes: Routes = [
  {
    path: '',
    component: UsuventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuventasPageRoutingModule {}
