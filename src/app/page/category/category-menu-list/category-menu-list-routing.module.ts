import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryMenuListPage } from './category-menu-list.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryMenuListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryMenuListPageRoutingModule {}
