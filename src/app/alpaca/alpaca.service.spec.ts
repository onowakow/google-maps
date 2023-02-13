import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpRequestState } from './shared/httpRequestState.model';

const { API_URL } = environment;

import { AlpacaService } from './alpaca.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Account } from './shared/account.model';

describe('AlpacaService', () => {
  let service: AlpacaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlpacaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#accountState$', () => {
    const accountApiUrl = `${API_URL}/alpaca/account`;
    it('should emit HttpRequestState type on http success', () => {
      const subscription = service.accountState$.subscribe((val) => {
        expect(val instanceof HttpRequestState).toEqual(true);
      });
      const req = httpTestingController.expectOne(accountApiUrl);

      req.flush('mockBody');

      subscription.unsubscribe();
    });

    // Check that accountState emits right type of error
    it('should indicate loading and then an error upon http error', () => {
      const mockHttpError = {
        status: 500,
        statusText: 'Internal service error',
      };

      let observableValueIndex = 0;
      const expectedValues = [
        new HttpRequestState(true, null, null),
        new HttpRequestState(
          false,
          null,
          new HttpErrorResponse({
            ...mockHttpError,
            url: accountApiUrl,
          })
        ),
      ];

      const subscription = service.accountState$.subscribe((val) => {
        expect(val).toEqual(expectedValues[observableValueIndex]);
        observableValueIndex++;
      });
      const req = httpTestingController.expectOne(accountApiUrl);
      req.flush('', mockHttpError);
      subscription.unsubscribe();
    });

    it('should indicate loading and then value upon successful http request', () => {
      const mockResponse: Account = {
        account_number: 'ABC',
        cash: '1234',
        buying_power: '1234',
        equity: '1234',
      };
      let observableValueIndex = 0;
      const expectedValues = [
        new HttpRequestState(true, null, null),
        new HttpRequestState(false, mockResponse, null),
      ];

      const subscription = service.accountState$.subscribe((val) => {
        expect(val).toEqual(expectedValues[observableValueIndex]);
        observableValueIndex++;
      });
      const req = httpTestingController.expectOne(accountApiUrl);
      req.flush(mockResponse);
      subscription.unsubscribe();
    });
  });
});
