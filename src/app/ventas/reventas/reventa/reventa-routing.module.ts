import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReventaPage } from './reventa.page';

const routes: Routes = [
  {
    path: '',
    component: ReventaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReventaPageRoutingModule {}
