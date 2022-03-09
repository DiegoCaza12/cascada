import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcventasPage } from './acventas.page';

const routes: Routes = [
  {
    path: '',
    component: AcventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcventasPageRoutingModule {}
