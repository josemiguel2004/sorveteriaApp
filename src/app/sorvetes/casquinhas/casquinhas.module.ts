import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasquinhasPageRoutingModule } from './casquinhas-routing.module';

import { CasquinhasPage } from './casquinhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasquinhasPageRoutingModule
  ],
  declarations: [CasquinhasPage]
})
export class CasquinhasPageModule {}
