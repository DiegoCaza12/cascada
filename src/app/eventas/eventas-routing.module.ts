import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventasPage } from './eventas.page';

const routes: Routes = [
  {
    path: '',
    component: EventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventasPageRoutingModule {}
