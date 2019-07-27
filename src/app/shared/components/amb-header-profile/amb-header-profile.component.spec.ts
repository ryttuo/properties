import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbHeaderProfileComponent } from './amb-header-profile.component';

describe('AmbHeaderProfileComponent', () => {
  let component: AmbHeaderProfileComponent;
  let fixture: ComponentFixture<AmbHeaderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbHeaderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbHeaderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
