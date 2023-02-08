import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { DirectionsService } from './directions.service';
import { Directions } from './directions.model';
import { DirectionParams } from './directionParams.model';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

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

  describe('getDirections', () => {
    let mockDirections: Directions;
    let mockParams: DirectionParams;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      httpTestingController = TestBed.inject(HttpTestingController);
      mockDirections = {
        status: 'OK',
      };
      mockParams = {
        origin: 'here',
        destination: 'there',
      };
    });

    afterEach(() => {
      httpTestingController.verify();
    });

    it('should GET directions', () => {
      service.getDirections(mockParams).subscribe((data) => {
        expect(data).toEqual(mockDirections);
      });

      const req = httpTestingController.expectOne(
        `${API_URL}/directions?origin=here&destination=there`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockDirections);
    });
  });
});
