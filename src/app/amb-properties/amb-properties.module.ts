import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbPropertiesRoutingModule } from './amb-properties-routing.module';
import { AmbPropertiesComponent } from './amb-properties.component';

@NgModule({
  imports: [
    CommonModule,
    AmbPropertiesRoutingModule
  ],
  declarations: [AmbPropertiesComponent]
})
export class AmbPropertiesModule { }
