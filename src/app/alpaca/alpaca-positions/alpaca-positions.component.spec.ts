import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ErrorComponent } from 'src/app/error/error.component';
import { HttpRequestState } from '../shared/httpRequestState.model';
import { AlpacaPositionsComponent } from './alpaca-positions.component';

const mockPosition = {
  symbol: 'AMZN',
  exchange: 'NASDAQ',
  qty: '1',
  current_price: '98.45',
  change_today: '-0.0109503717098654',
};
const mockError = new HttpErrorResponse({
  status: 500,
  statusText: 'mock internal service error',
});
const mockLoadingPositionsRequestState = new HttpRequestState(true, [], null);
const mockSuccessfulPositionsRequestState = new HttpRequestState(
  false,
  [mockPosition],
  null
);
const mockFailedPositionsRequestState = new HttpRequestState(
  false,
  [],
  mockError
);

describe('AlpacaPositionsComponent', () => {
  let component: AlpacaPositionsComponent;
  let fixture: ComponentFixture<AlpacaPositionsComponent>;
  const getPositionsTableDe = () =>
    fixture.debugElement.query(By.css('#alpaca-positions-table'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlpacaPositionsComponent, ErrorComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AlpacaPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have positions$', () => {
    expect(component.positions$).toBeDefined();
  });

  describe('Positions table', () => {
    it('should display if there are positions', () => {
      component.positions$ = of(mockSuccessfulPositionsRequestState);
      fixture.detectChanges();

      expect(getPositionsTableDe()).toBeTruthy();
    });
    it('should not display if there are not positions', () => {
      component.positions$ = of(mockFailedPositionsRequestState);
      fixture.detectChanges();

      expect(getPositionsTableDe()).toBeFalsy();
    });

    it('should have table headers', () => {
      component.positions$ = of(mockSuccessfulPositionsRequestState);
      fixture.detectChanges();
      const tableDe = getPositionsTableDe();
      const tableHeaders = tableDe.queryAll(By.css('th'));

      expect(tableHeaders.length).toBeGreaterThan(0);
    });

    it('should display one row for each position', () => {
      component.positions$ = of(mockSuccessfulPositionsRequestState);
      fixture.detectChanges();
      const tableDe = getPositionsTableDe();
      const rowsDe = tableDe.queryAll(By.css('.alpaca-position'));

      expect(rowsDe.length).toEqual(
        mockSuccessfulPositionsRequestState.value.length
      );
    });

    it('should display information about each position', () => {
      component.positions$ = of(mockSuccessfulPositionsRequestState);
      fixture.detectChanges();
      const tableDe = getPositionsTableDe();
      const rowDe = tableDe.query(By.css('.alpaca-position'));
      const cellsDe = rowDe.queryAll(By.css('td'));

      expect(cellsDe.length).toBeGreaterThan(0);
    });
  });

  it('should display loading message if loading', () => {
    component.positions$ = of(mockLoadingPositionsRequestState);
    fixture.detectChanges();
    const tableLoadingDe = fixture.debugElement.query(
      By.css('#alpaca-table-loading')
    );

    expect(tableLoadingDe).toBeTruthy();
  });
  it('should not display loading message with successful response', () => {
    component.positions$ = of(mockSuccessfulPositionsRequestState);
    fixture.detectChanges();
    const tableLoadingDe = fixture.debugElement.query(
      By.css('#alpaca-table-loading')
    );

    expect(tableLoadingDe).toBeFalsy();
  });
  it('should not display loading message with failed response', () => {
    component.positions$ = of(mockFailedPositionsRequestState);
    fixture.detectChanges();
    const tableLoadingDe = fixture.debugElement.query(
      By.css('#alpaca-table-loading')
    );

    expect(tableLoadingDe).toBeFalsy();
  });

  it('should display an error if error', () => {
    component.positions$ = of(mockFailedPositionsRequestState);
    fixture.detectChanges();
    const errorComponentDe = fixture.debugElement.query(By.css('app-error'));

    expect(errorComponentDe).toBeTruthy();
  });
  it('should not display an error if no error', () => {
    component.positions$ = of(mockSuccessfulPositionsRequestState);
    fixture.detectChanges();
    const errorComponentDe = fixture.debugElement.query(By.css('app-error'));

    expect(errorComponentDe).toBeFalsy();
  });
});
