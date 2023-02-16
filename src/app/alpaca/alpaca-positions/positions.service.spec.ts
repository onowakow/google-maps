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
  let httpMockRespondSuccessfully: () => void;
  let httpMockRespondErroneously: () => void;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PositionsService);
    httpMock = TestBed.inject(HttpTestingController);
    httpMockRespondSuccessfully = () => {
      const req = httpMock.expectOne(positionsApiUrl);
      req.flush([mockPosition]);
    };
    httpMockRespondErroneously = () => {
      const req = httpMock.expectOne(positionsApiUrl);
      req.flush(null, mockHttpError);
    };
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#positions$', () => {
    it('should have an initial request state value of an empty array', () => {
      let emitIndex = 0;
      const subscription = service.positions$.subscribe((requestState) => {
        const { value } = requestState;
        if (emitIndex === 0) expect(value.length).toEqual(0);
        emitIndex++;
      });

      httpMockRespondSuccessfully();
      subscription.unsubscribe();
    });
    it('should make an http call and have a request state value matching the http response', () => {
      let emitIndex = 0;
      const subscription = service.positions$.subscribe((requestState) => {
        const { value } = requestState;
        if (emitIndex === 1) expect(value).toEqual([mockPosition]);
        emitIndex++;
      });

      httpMockRespondSuccessfully();

      expect(emitIndex).toEqual(2);
      subscription.unsubscribe();
    });

    describe('#positions$ loading indication', () => {
      it('should indicate loading appropriately on successful http response', () => {
        let RESPONSE_RECEIVED = false;
        const subscription = service.positions$.subscribe((requestState) => {
          const { value } = requestState;
          if (value.length) {
            RESPONSE_RECEIVED = true;
          }

          if (!RESPONSE_RECEIVED) {
            expect(requestState.isLoading).toBeTrue();
          } else {
            expect(requestState.isLoading).toBeFalse();
          }
        });

        httpMockRespondSuccessfully();
        expect(RESPONSE_RECEIVED).toBeTrue();
        subscription.unsubscribe();
      });
      it('should indicate loading appropriately on failed http response', () => {
        let RESPONSE_RECEIVED = false;
        const subscription = service.positions$.subscribe((requestState) => {
          const { error } = requestState;
          if (error) RESPONSE_RECEIVED = true;

          if (!RESPONSE_RECEIVED) {
            expect(requestState.isLoading).toBeTrue();
          } else {
            expect(requestState.isLoading).toBeFalse();
          }
        });

        httpMockRespondErroneously();
        expect(RESPONSE_RECEIVED).toBeTrue();
        subscription.unsubscribe();
      });
    });

    describe('#positions$ error indication', () => {
      it('should not indicate error on successful response', () => {
        const subscription = service.positions$.subscribe((requestState) => {
          const { error, isLoading } = requestState;
          if (isLoading === false) {
            expect(error).toEqual(null);
          }
        });

        httpMockRespondSuccessfully();
        subscription.unsubscribe();
      });
      it('should indicate error on erroneous response', () => {
        const subscription = service.positions$.subscribe((requestState) => {
          const { error, isLoading } = requestState;
          if (isLoading === false) {
            expect(error).not.toBeNull();
          }
        });

        httpMockRespondErroneously();
        subscription.unsubscribe();
      });
    });
  });
});
