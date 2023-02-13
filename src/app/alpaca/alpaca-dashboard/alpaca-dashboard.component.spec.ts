import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of } from 'rxjs';
import { Account } from '../shared/account.model';
import { HttpRequestState } from '../shared/httpRequestState.model';

import { AlpacaDashboardComponent } from './alpaca-dashboard.component';

const loadingAccountState = new HttpRequestState(true, null, null);
const errorAccountState = new HttpRequestState(
  false,
  null,
  new HttpErrorResponse({ status: 500, statusText: 'Internal Service Error' })
);
const valuefulAccountState = new HttpRequestState<Account>(
  false,
  {
    account_number: 'ABC123',
    cash: '1234.56',
    buying_power: '4567.89',
    equity: '1234.56',
  },
  null
);

describe('AlpacaDashboardComponent', () => {
  let component: AlpacaDashboardComponent;
  let fixture: ComponentFixture<AlpacaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AlpacaDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlpacaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render account response state', () => {
    let loadingDe: DebugElement;
    let errorDe: DebugElement;
    let valueDe: DebugElement;
    const getLoadingDe = (): DebugElement => {
      return fixture.debugElement.query(By.css('#account-state-loading'));
    };
    const getErrorDe = (): DebugElement => {
      return fixture.debugElement.query(By.css('#account-state-error'));
    };
    const getValueDe = (): DebugElement => {
      return fixture.debugElement.query(By.css('#account-state-value'));
    };

    it('should show error message if accountState is falsy', () => {
      component.accountStatePoll$ = of();
      fixture.detectChanges();
      const somethingWentWrong = fixture.debugElement.query(
        By.css('#account-state-something-went-wrong')
      );

      expect(somethingWentWrong).toBeTruthy();
    });

    it('should indicate only loading while loading', () => {
      component.accountStatePoll$ = of(loadingAccountState);
      fixture.detectChanges();
      loadingDe = getLoadingDe();
      errorDe = getErrorDe();
      valueDe = getValueDe();

      expect(loadingDe).toBeTruthy();
      expect(errorDe).toBeFalsy();
      expect(valueDe).toBeFalsy();
    });

    it('should indicate only error when error', () => {
      component.accountStatePoll$ = of(errorAccountState);
      fixture.detectChanges();
      loadingDe = getLoadingDe();
      errorDe = getErrorDe();
      valueDe = getValueDe();

      expect(loadingDe).toBeFalsy();
      expect(errorDe).toBeTruthy();
      expect(valueDe).toBeFalsy();
    });

    it('should render account state', () => {
      component.accountStatePoll$ = of(valuefulAccountState);
      fixture.detectChanges();
      loadingDe = getLoadingDe();
      errorDe = getErrorDe();
      valueDe = getValueDe();

      expect(loadingDe).toBeFalsy();
      expect(errorDe).toBeFalsy();
      expect(valueDe).toBeTruthy();
    });

    describe('Render about account', () => {
      beforeEach(() => {
        component.accountStatePoll$ = of(valuefulAccountState);
        fixture.detectChanges();
      });

      it('should display piped equity', () => {
        const equityDe = fixture.debugElement.query(By.css('#user-equity'));
        const text = equityDe.nativeElement.innerText;

        expect(text).toContain('$1,234.56');
      });
      it('should display piped buying power', () => {
        const buyingPowerDe = fixture.debugElement.query(
          By.css('#user-buying-power')
        );
        const text = buyingPowerDe.nativeElement.innerText;

        expect(text).toContain('$4,567.89');
      });
      it('should display piped cash', () => {
        const cashDe = fixture.debugElement.query(By.css('#user-cash'));
        const text = cashDe.nativeElement.innerText;

        expect(text).toContain('$1,234.56');
      });
    });
  });

  it('should have #accountState$ injected', () => {
    expect(component.accountStatePoll$).toBeTruthy();
  });
});
