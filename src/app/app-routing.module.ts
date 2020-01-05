import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'mycard-menu-list',
  //   loadChildren: () => import('./page/mycard/mycard-menu-list/mycard-menu-list.module').then( m => m.MycardMenuListPageModule)
  // },
  // {
  //   path: 'mycard-word-list',
  //   loadChildren: () => import('./page/mycard/mycard-word-list/mycard-word-list.module').then( m => m.MycardWordListPageModule)
  // },
  // {
  //   path: 'mycard-word-view',
  //   loadChildren: () => import('./page/mycard/mycard-word-view/mycard-word-view.module').then( m => m.MycardWordViewPageModule)
  // },
  // {
  //   path: 'category-menu-list',
  //   loadChildren: () => import('./page/category/category-menu-list/category-menu-list.module').then( m => m.CategoryMenuListPageModule)
  // },
  // {
  //   path: 'category-word-list',
  //   loadChildren: () => import('./page/category/category-word-list/category-word-list.module').then( m => m.CategoryWordListPageModule)
  // },
  // {
  //   path: 'category-word-view',
  //   loadChildren: () => import('./page/category/category-word-view/category-word-view.module').then( m => m.CategoryWordViewPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
