import { TestBed, inject } from '@angular/core/testing';

import { PropertyService } from './property.service';
import { HttpClientModule } from '@angular/common/http';

describe('PropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [PropertyService]
    });
  });

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));
});
