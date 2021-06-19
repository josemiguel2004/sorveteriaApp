import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilkShakePage } from './milk-shake.page';

const routes: Routes = [
  {
    path: '',
    component: MilkShakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilkShakePageRoutingModule {}
