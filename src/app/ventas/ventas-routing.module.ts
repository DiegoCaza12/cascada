import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasPage } from './ventas.page';

const routes: Routes = [
  {
    path: '',
    component: VentasPage
  },
  {
    path: 'reventa',
    loadChildren: () => import('./reventas/reventa/reventa.module').then( m => m.ReventaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasPageRoutingModule {}
