import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
      path: '',
      pathMatch: 'full',
      loadChildren: './amb-home/amb-home.module#AmbHomeModule'
  },
  {
    path: 'articles',
    pathMatch: 'full',
    loadChildren: './amb-articles/amb-articles.module#AmbArticlesModule'
  },
  {
    path: 'properties',
    pathMatch: 'full',
    loadChildren: './amb-properties/amb-properties.module#AmbPropertiesModule'
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
