import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardWordViewPageRoutingModule } from './mycard-word-view-routing.module';

import { MycardWordViewPage } from './mycard-word-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardWordViewPageRoutingModule
  ],
  declarations: [MycardWordViewPage]
})
export class MycardWordViewPageModule {}
