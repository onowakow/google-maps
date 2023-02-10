import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

import { AlpacaService } from './alpaca.service';

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

  it('#accountState$ should make an http call', () => {
    const subscription = service?.accountState$.subscribe();

    const req = httpTestingController.expectOne(`${API_URL}/alpaca/account`);
    req.flush('mockBody');

    subscription.unsubscribe();
  });
});
