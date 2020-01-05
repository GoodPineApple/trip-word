import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mycard',
        children: [
          {
            path: 'menu-list',
            loadChildren: () =>
              import('../page/mycard/mycard-menu-list/mycard-menu-list.module').then(m => m.MycardMenuListPageModule)
          },
          {
            path: 'word-list',
            loadChildren: () =>
              import('../page/mycard/mycard-word-list/mycard-word-list.module').then(m => m.MycardWordListPageModule)
          },
          {
            path: 'word-view',
            loadChildren: () =>
              import('../page/mycard/mycard-word-view/mycard-word-view.module').then(m => m.MycardWordViewPageModule)
          },
          {
            path: '',
            redirectTo: '/tabs/mycard/menu-list',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: 'menu-list',
            loadChildren: () =>
              import('../page/category/category-menu-list/category-menu-list.module').then(m => m.CategoryMenuListPageModule)
          },
          {
            path: 'word-list',
            loadChildren: () =>
              import('../page/category/category-word-list/category-word-list.module').then(m => m.CategoryWordListPageModule)
          },
          {
            path: 'word-view',
            loadChildren: () =>
              import('../page/category/category-word-view/category-word-view.module').then(m => m.CategoryWordViewPageModule)
          },
          {
            path: '',
            redirectTo: '/tabs/category/menu-list',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/mycard/category-list',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mycard/menu-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
