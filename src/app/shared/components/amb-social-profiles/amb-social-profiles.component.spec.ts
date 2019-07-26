
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbSocialProfilesComponent } from './amb-social-profiles.component';

describe('AmbNavComponent', () => {
  let component: AmbSocialProfilesComponent;
  let fixture: ComponentFixture<AmbSocialProfilesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbSocialProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbSocialProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
