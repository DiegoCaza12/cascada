import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclientePage } from './recliente.page';

const routes: Routes = [
  {
    path: '',
    component: ReclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclientePageRoutingModule {}
