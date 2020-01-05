import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryMenuListPageRoutingModule } from './category-menu-list-routing.module';

import { CategoryMenuListPage } from './category-menu-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryMenuListPageRoutingModule
  ],
  declarations: [CategoryMenuListPage]
})
export class CategoryMenuListPageModule {}
