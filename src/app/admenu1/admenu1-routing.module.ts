import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admenu1Page } from './admenu1.page';

const routes: Routes = [
  {
    path: '',
    component: Admenu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admenu1PageRoutingModule {}
