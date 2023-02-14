import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ErrorComponent } from 'src/app/error/error.component';
import { AlpacaPositionsComponent } from './alpaca-positions.component';

const mockPosition = {
  symbol: 'AMZN',
  exchange: 'NASDAQ',
  qty: '1',
  current_price: '98.45',
  change_today: '-0.0109503717098654',
};

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
  it('should have positionsError$', () => {
    expect(component.positionsError$).toBeDefined();
  });
  it('should have positionsLoading$', () => {
    expect(component.positionsLoading$).toBeDefined();
  });

  describe('Positions table', () => {
    it('should display if there are positions', () => {
      component.positions$ = of([mockPosition]);
      fixture.detectChanges();

      expect(getPositionsTableDe()).toBeTruthy();
    });
    it('should not display if there are not positions', () => {
      component.positions$ = of([]);
      fixture.detectChanges();

      expect(getPositionsTableDe()).toBeFalsy();
    });

    it('should have table headers', () => {
      component.positions$ = of([mockPosition]);
      fixture.detectChanges();
      const tableDe = getPositionsTableDe();
      const tableHeaders = tableDe.queryAll(By.css('th'));

      expect(tableHeaders.length).toBeGreaterThan(0);
    });

    it('should display one row for each position', () => {
      const mockPositions = [mockPosition, mockPosition];
      component.positions$ = of(mockPositions);
      fixture.detectChanges();
      const tableDe = getPositionsTableDe();
      const rowsDe = tableDe.queryAll(By.css('.alpaca-position'));

      expect(rowsDe.length).toEqual(mockPositions.length);
    });

    it('should display information about each position', () => {
      component.positions$ = of([mockPosition]);
      fixture.detectChanges();
      const tableDe = getPositionsTableDe();
      const rowDe = tableDe.query(By.css('.alpaca-position'));
      const cellsDe = rowDe.queryAll(By.css('td'));

      expect(cellsDe.length).toBeGreaterThan(0);
    });
  });

  it('should display loading message if loading', () => {
    component.positionsLoading$ = of(true);
    fixture.detectChanges();
    const tableLoadingDe = fixture.debugElement.query(
      By.css('#alpaca-table-loading')
    );

    expect(tableLoadingDe).toBeTruthy();
  });
  it('should not display loading message if not loading', () => {
    component.positionsLoading$ = of(false);
    fixture.detectChanges();
    const tableLoadingDe = fixture.debugElement.query(
      By.css('#alpaca-table-loading')
    );

    expect(tableLoadingDe).toBeFalsy();
  });

  it('should display an error if error', () => {
    component.positionsError$ = of(new Error('error'));
    fixture.detectChanges();
    const errorComponentDe = fixture.debugElement.query(By.css('app-error'));

    expect(errorComponentDe).toBeTruthy();
  });
  it('should not display an error if no error', () => {
    component.positionsError$ = of(null);
    fixture.detectChanges();
    const errorComponentDe = fixture.debugElement.query(By.css('app-error'));

    expect(errorComponentDe).toBeFalsy();
  });
});
