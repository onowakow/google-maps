import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DirectionsService } from './directions.service';

describe('DirectionsService', () => {
  let service: DirectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DirectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
