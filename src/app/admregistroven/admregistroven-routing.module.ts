import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmregistrovenPage } from './admregistroven.page';

const routes: Routes = [
  {
    path: '',
    component: AdmregistrovenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmregistrovenPageRoutingModule {}
