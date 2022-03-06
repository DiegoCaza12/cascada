import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuLogginPage } from './usu-loggin.page';

const routes: Routes = [
  {
    path: '',
    component: UsuLogginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuLogginPageRoutingModule {}
