import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EclientePage } from './ecliente.page';

const routes: Routes = [
  {
    path: '',
    component: EclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EclientePageRoutingModule {}
