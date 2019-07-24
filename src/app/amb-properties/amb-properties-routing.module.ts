import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbPropertiesComponent } from './amb-properties.component';

const routes: Routes = [
  { path : '', component : AmbPropertiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbPropertiesRoutingModule { }
