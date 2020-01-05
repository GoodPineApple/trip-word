import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardWordListPage } from './mycard-word-list.page';

const routes: Routes = [
  {
    path: '',
    component: MycardWordListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardWordListPageRoutingModule {}
