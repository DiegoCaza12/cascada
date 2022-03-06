import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarventasPage } from './registrarventas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarventasPageRoutingModule {}
