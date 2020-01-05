import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardWordViewPage } from './mycard-word-view.page';

const routes: Routes = [
  {
    path: '',
    component: MycardWordViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardWordViewPageRoutingModule {}
