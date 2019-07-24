import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbArticlesComponent } from './amb-articles.component';

describe('AmbArticlesComponent', () => {
  let component: AmbArticlesComponent;
  let fixture: ComponentFixture<AmbArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
