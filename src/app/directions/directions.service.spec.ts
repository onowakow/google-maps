import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { DirectionsService } from './directions.service';

describe('DirectionsService', () => {
  let service: DirectionsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(DirectionsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get request', () => {
    const { apiUrl } = service;
    const testData = { name: 'Test Data' };
    const params = {
      origin: 'here',
      destination: 'there',
    };

    service.getDirections(params).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(
      apiUrl + '?origin=here&destination=there'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
