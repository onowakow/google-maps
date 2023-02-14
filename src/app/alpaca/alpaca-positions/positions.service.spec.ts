import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

import { PositionsService } from './positions.service';

describe('PositionsService', () => {
  let service: PositionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PositionsService);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#positions$ on subscription', () => {
    it('should make an http call', () => {
      const subscription = service.positions$.subscribe();

      const req = httpMock.expectOne(`${API_URL}/alpaca/positions`);
      req.flush('body');
      subscription.unsubscribe();
    });
  });
});
