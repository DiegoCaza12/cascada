import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsumenuPage } from './usumenu.page';

const routes: Routes = [
  {
    path: '',
    component: UsumenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsumenuPageRoutingModule {}
