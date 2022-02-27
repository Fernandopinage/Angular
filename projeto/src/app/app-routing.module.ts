import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'usuario/create', pathMatch:'full', redirectTo:'create'},

  {path:'usuario/lista',pathMatch:'full', redirectTo:'select'},


  {
    path: 'create',
    loadChildren: () => import('./usuario/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./usuario/select/select.module').then(m => m.SelectModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
