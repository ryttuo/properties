import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbArticlesRoutingModule } from './amb-articles-routing.module';
import { AmbArticlesComponent } from './amb-articles.component';

@NgModule({
  imports: [
    CommonModule,
    AmbArticlesRoutingModule
  ],
  declarations: [AmbArticlesComponent]
})
export class AmbArticlesModule { }
