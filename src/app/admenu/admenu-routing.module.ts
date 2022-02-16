import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmenuPage } from './admenu.page';

const routes: Routes = [
  {
    path: '',
    component: AdmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmenuPageRoutingModule {}
