import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbPropertiesComponent } from './amb-properties.component';

describe('AmbPropertiesComponent', () => {
  let component: AmbPropertiesComponent;
  let fixture: ComponentFixture<AmbPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
