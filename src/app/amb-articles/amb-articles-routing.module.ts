import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbArticlesComponent } from './amb-articles.component';

const routes: Routes = [
  { path : '', component : AmbArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbArticlesRoutingModule { }
