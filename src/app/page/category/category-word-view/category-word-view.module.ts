import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryWordViewPageRoutingModule } from './category-word-view-routing.module';

import { CategoryWordViewPage } from './category-word-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryWordViewPageRoutingModule
  ],
  declarations: [CategoryWordViewPage]
})
export class CategoryWordViewPageModule {}
