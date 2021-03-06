import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardMenuListPage } from './mycard-menu-list.page';

const routes: Routes = [
  {
    path: '',
    component: MycardMenuListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardMenuListPageRoutingModule {}
