import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbPropertiesRoutingModule } from './amb-properties-routing.module';
import { AmbPropertiesComponent } from './amb-properties.component';
import { StoreModule } from '@ngrx/store';
import * as fromProperty from './store/property.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PropertyEffects } from './store/property.effects';
import { MaterialModule } from '../shared/material/material.module';
import { PropertyService } from './store/property.service';

@NgModule({
  imports: [
    CommonModule,
    AmbPropertiesRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromProperty.PROPERTY_FEATURE_NAME, fromProperty.propertyReducer),
    EffectsModule.forFeature([PropertyEffects])
  ],
  declarations: [AmbPropertiesComponent],
  providers: [PropertyService],
  exports:[AmbPropertiesComponent]
})
export class AmbPropertiesModule { }
