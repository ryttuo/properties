import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbPropertiesComponent } from './amb-properties.component';
import { MaterialModule } from '../shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import * as fromProperty from './store/property.reducer';

describe('AmbPropertiesComponent', () => {
  let component: AmbPropertiesComponent;
  let fixture: ComponentFixture<AmbPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromProperty.PROPERTY_FEATURE_NAME, fromProperty.propertyReducer)
      ],
      declarations: [ AmbPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
