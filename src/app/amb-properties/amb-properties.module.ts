import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbPropertiesRoutingModule } from './amb-properties-routing.module';
import { AmbPropertiesComponent } from './amb-properties.component';
import { StoreModule } from '@ngrx/store';
import * as fromProperty from './store/property.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PropertyEffects } from './store/property.effects';

@NgModule({
  imports: [
    CommonModule,
    AmbPropertiesRoutingModule,
    StoreModule.forFeature('property', fromProperty.propertyReducer),
    EffectsModule.forFeature([PropertyEffects])
  ],
  declarations: [AmbPropertiesComponent]
})
export class AmbPropertiesModule { }
