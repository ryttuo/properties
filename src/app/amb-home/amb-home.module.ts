import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbHomeRoutingModule } from './amb-home-routing.module';
import { AmbHomeComponent } from './amb-home.component';
import { MaterialModule } from '../shared/material/material.module';
import { AmbArticlesModule } from '../amb-articles/amb-articles.module';
import { AmbPropertiesModule } from '../amb-properties/amb-properties.module';
import { AmbSocialProfilesComponent } from '../shared/components/amb-social-profiles/amb-social-profiles.component';
import { AmbHeaderProfileComponent } from '../shared/components/amb-header-profile/amb-header-profile.component';

@NgModule({
  imports: [
    CommonModule,
    AmbHomeRoutingModule,
    MaterialModule,
    AmbArticlesModule,
    AmbPropertiesModule,
  ],
  declarations: [AmbHomeComponent, AmbSocialProfilesComponent, AmbHeaderProfileComponent]
})
export class AmbHomeModule { }
