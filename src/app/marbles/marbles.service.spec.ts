import { TestBed } from '@angular/core/testing';
import { MarblesService } from './marbles.service';
import { environment } from 'src/environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
const { API_URL } = environment;

describe('MarblesService', () => {
  let service: MarblesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MarblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#libraryName$ should make a POST request when #onSubmitName is called with a valid form', () => {
    service.libraryName$.subscribe();

    service.submitName({
      firstName: 'Elvis',
      lastName: 'Presley',
    });

    const req = httpMock.expectOne(`${API_URL}/name`);
    expect(req.request.method).toEqual('POST');
  });
});
