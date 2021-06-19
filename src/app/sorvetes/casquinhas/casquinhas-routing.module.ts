import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasquinhasPage } from './casquinhas.page';

const routes: Routes = [
  {
    path: '',
    component: CasquinhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasquinhasPageRoutingModule {}
