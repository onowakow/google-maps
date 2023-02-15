import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Position } from './position.model';
const { API_URL } = environment;

import { PositionsService } from './positions.service';

const positionsApiUrl = `${API_URL}/alpaca/positions`;
const mockHttpError = new HttpErrorResponse({
  status: 500,
  statusText: 'Mock Internal Service Error',
  url: positionsApiUrl,
});
const mockPosition: Position = {
  symbol: 'AMZN',
  exchange: 'NASDAQ',
  qty: '1',
  current_price: '101.25',
  change_today: '0.0155466399197593',
};

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
    it('should initially emit an empty array', () => {
      let emitIndex = 0;
      const subscription = service.positions$.subscribe((val) => {
        if (emitIndex === 0) expect(val.length).toEqual(0);
        emitIndex++;
      });

      const req = httpMock.expectOne(positionsApiUrl);
      req.flush([mockPosition]);
      subscription.unsubscribe();
    });
    it('should make an http call', () => {
      let emitIndex = 0;
      const subscription = service.positions$.subscribe((val) => {
        if (emitIndex === 1) expect(val).toEqual([mockPosition]);
        emitIndex++;
      });

      const req = httpMock.expectOne(positionsApiUrl);
      req.flush([mockPosition]);
      subscription.unsubscribe();
    });

    it('#positionsError$ should emit if an error is received via http', () => {
      const positionsSubscription = service.positions$.subscribe();
      const req = httpMock.expectOne(positionsApiUrl);

      req.flush(null, mockHttpError);

      const positionsErrorSubscription = service.positionsError$.subscribe(
        (val) => {
          expect(val).toEqual(mockHttpError);
        }
      );

      positionsSubscription.unsubscribe();
      positionsErrorSubscription.unsubscribe();
    });
  });
});
