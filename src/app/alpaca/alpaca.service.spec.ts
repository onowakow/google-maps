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
    it('#accountState$ should emit HttpRequestState type on http success', () => {
      const subscription = service.accountState$.subscribe((val) => {
        expect(val instanceof HttpRequestState).toEqual(true);
      });
      const req = httpTestingController.expectOne(`${API_URL}/alpaca/account`);

      req.flush('mockBody');

      subscription.unsubscribe();
    });

    // Check that accountState emits right type of error
    it('#accountState$ should indicate loading and then an error when encountering http error', () => {
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
            url: 'http://localhost:3002/alpaca/account',
          })
        ),
      ];

      service.accountState$.subscribe((val) => {
        expect(val).toEqual(expectedValues[observableValueIndex]);
        observableValueIndex++;
      });
      const req = httpTestingController.expectOne(`${API_URL}/alpaca/account`);
      req.flush('', mockHttpError);
    });
  });
});
