import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardMenuListPageRoutingModule } from './mycard-menu-list-routing.module';

import { MycardMenuListPage } from './mycard-menu-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardMenuListPageRoutingModule
  ],
  declarations: [MycardMenuListPage]
})
export class MycardMenuListPageModule {}
