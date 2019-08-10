import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbHomeComponent } from './amb-home.component';
import { MaterialModule } from '../shared/material/material.module';
import { AmbSocialProfilesComponent } from '../shared/components/amb-social-profiles/amb-social-profiles.component';
import { AmbHeaderProfileComponent } from '../shared/components/amb-header-profile/amb-header-profile.component';
import { AmbArticlesModule } from '../amb-articles/amb-articles.module';
import { AmbPropertiesModule } from '../amb-properties/amb-properties.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('AmbHomeComponent', () => {
  let component: AmbHomeComponent;
  let fixture: ComponentFixture<AmbHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AmbArticlesModule,
        AmbPropertiesModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        // StoreModule.forFeature()
      ],
      declarations: [AmbHomeComponent, AmbSocialProfilesComponent, AmbHeaderProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
