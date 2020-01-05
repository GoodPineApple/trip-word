import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryWordListPageRoutingModule } from './category-word-list-routing.module';

import { CategoryWordListPage } from './category-word-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryWordListPageRoutingModule
  ],
  declarations: [CategoryWordListPage]
})
export class CategoryWordListPageModule {}
