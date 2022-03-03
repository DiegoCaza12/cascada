import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReproductosPage } from './reproductos.page';

const routes: Routes = [
  {
    path: '',
    component: ReproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReproductosPageRoutingModule {}
