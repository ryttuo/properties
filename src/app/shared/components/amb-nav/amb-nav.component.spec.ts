
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbNavComponent } from './amb-nav.component';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { AmbFooterComponent } from '../amb-footer/amb-footer.component';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AmbNavComponent', () => {
  let component: AmbNavComponent;
  let fixture: ComponentFixture<AmbNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
      ],
      declarations: [ AmbNavComponent, AmbFooterComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
  

});
