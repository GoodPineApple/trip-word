import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryWordViewPage } from './category-word-view.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryWordViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryWordViewPageRoutingModule {}
