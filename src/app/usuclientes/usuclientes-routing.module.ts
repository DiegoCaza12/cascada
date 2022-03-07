import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuclientesPage } from './usuclientes.page';

const routes: Routes = [
  {
    path: '',
    component: UsuclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuclientesPageRoutingModule {}
