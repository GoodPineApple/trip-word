import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardPage } from './mycard.page';

const routes: Routes = [
  {
    path:'mycard',
    component: MycardPage,
    children: [
      {
        path: 'category-list',
        loadChildren: () => import('./category-list/category-list.module').then( m => m.CategoryListPageModule)
      },
      {
        path: 'card-list',
        loadChildren: () => import('./card-list/card-list.module').then( m => m.CardListPageModule)
      },
      {
        path: 'card-view',
        loadChildren: () => import('./card-view/card-view.module').then( m => m.CardViewPageModule)
      },
      {
        path: '',
        redirectTo: '/mycard/category-list',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/mycard/category-list',
    pathMatch: 'prefix'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardPageRoutingModule {}
