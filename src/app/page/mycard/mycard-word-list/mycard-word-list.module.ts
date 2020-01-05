import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardWordListPageRoutingModule } from './mycard-word-list-routing.module';

import { MycardWordListPage } from './mycard-word-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardWordListPageRoutingModule
  ],
  declarations: [MycardWordListPage]
})
export class MycardWordListPageModule {}
