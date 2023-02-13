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
    equity: '1233.33',
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

  it('should have a title', () => {
    const titleDe = fixture.debugElement.query(
      By.css('#alpaca-dashboard-title')
    );

    expect(titleDe).toBeTruthy();
  });

  // it('should have a place to display equity', () => {
  //   const equityDe = fixture.debugElement.query(By.css('#user-equity'));

  //   expect(equityDe).toBeTruthy();
  // });
  // it('should have a place to display buying power', () => {
  //   const buyingPowerDe = fixture.debugElement.query(
  //     By.css('#user-buying-power')
  //   );

  //   expect(buyingPowerDe).toBeTruthy();
  // });
  // it('should have a place to display cash', () => {
  //   const cashDe = fixture.debugElement.query(By.css('#user-cash'));

  //   expect(cashDe).toBeTruthy();
  // });

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

    it('should indicate only loading while loading', () => {
      component.accountState$ = of(loadingAccountState);
      fixture.detectChanges();
      loadingDe = getLoadingDe();
      errorDe = getErrorDe();
      valueDe = getValueDe();

      expect(loadingDe).toBeTruthy();
      expect(errorDe).toBeFalsy();
      expect(valueDe).toBeFalsy();
    });

    it('should indicate only error when error', () => {
      component.accountState$ = of(errorAccountState);
      fixture.detectChanges();
      loadingDe = getLoadingDe();
      errorDe = getErrorDe();
      valueDe = getValueDe();

      expect(loadingDe).toBeFalsy();
      expect(errorDe).toBeTruthy();
      expect(valueDe).toBeFalsy();
    });

    it('should render account state', () => {
      component.accountState$ = of(valuefulAccountState);
      fixture.detectChanges();
      loadingDe = getLoadingDe();
      errorDe = getErrorDe();
      valueDe = getValueDe();

      expect(loadingDe).toBeFalsy();
      expect(errorDe).toBeFalsy();
      expect(valueDe).toBeTruthy();
    });
  });

  // describe('Render about account', () => {
  //   beforeEach(() => {
  //     component.accountState$ = of(valuefulAccountState);
  //     fixture.detectChanges();
  //   });
  // });

  it('should have #accountState$ injected', () => {
    expect(component.accountState$).toBeTruthy();
  });
});
