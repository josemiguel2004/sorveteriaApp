import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkShakePageRoutingModule } from './milk-shake-routing.module';

import { MilkShakePage } from './milk-shake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkShakePageRoutingModule
  ],
  declarations: [MilkShakePage]
})
export class MilkShakePageModule {}
