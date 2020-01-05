import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryWordListPage } from './category-word-list.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryWordListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryWordListPageRoutingModule {}
