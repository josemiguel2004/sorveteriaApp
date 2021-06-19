import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'milk-shake',
    loadChildren: () => import('./sorvetes/milk-shake/milk-shake.module').then( m => m.MilkShakePageModule)
  },
  {
    path: 'casquinhas',
    loadChildren: () => import('./sorvetes/casquinhas/casquinhas.module').then( m => m.CasquinhasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
