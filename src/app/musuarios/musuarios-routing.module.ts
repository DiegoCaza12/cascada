import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusuariosPage } from './musuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusuariosPageRoutingModule {}
