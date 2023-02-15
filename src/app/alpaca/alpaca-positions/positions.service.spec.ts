import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

import { PositionsService } from './positions.service';

const positionsApiUrl = `${API_URL}/alpaca/positions`;
const mockHttpError = new HttpErrorResponse({
  status: 500,
  statusText: 'Mock Internal Service Error',
  url: positionsApiUrl,
});

describe('PositionsService', () => {
  let service: PositionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PositionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#positions$ on subscription', () => {
    it('should make an http call', () => {
      const subscription = service.positions$.subscribe((val) => {
        expect(val).toBeTruthy();
      });

      const req = httpMock.expectOne(positionsApiUrl);
      req.flush('body');
      subscription.unsubscribe();
    });

    it('#positionsError$ should emit if an error is received via http', () => {
      const positionsSubscription = service.positions$.subscribe();
      const req = httpMock.expectOne(positionsApiUrl);

      req.flush(null, mockHttpError);

      const positionsErrorSubscription = service.positionsError$.subscribe(
        (val) => {
          console.log(val);
          expect(val).toEqual(mockHttpError);
        }
      );

      positionsSubscription.unsubscribe();
      positionsErrorSubscription.unsubscribe();
    });
  });
});
