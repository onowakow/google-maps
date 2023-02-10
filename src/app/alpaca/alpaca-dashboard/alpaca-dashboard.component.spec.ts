import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlpacaDashboardComponent } from './alpaca-dashboard.component';

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

  describe('Render', () => {
    it('should have a title', () => {
      const titleDe = fixture.debugElement.query(
        By.css('#alpaca-dashboard-title')
      );

      expect(titleDe).toBeTruthy();
    });

    it('should have a place to display equity', () => {
      const equityDe = fixture.debugElement.query(By.css('#user-equity'));

      expect(equityDe).toBeTruthy();
    });
    it('should have a place to display buying power', () => {
      const buyingPowerDe = fixture.debugElement.query(
        By.css('#user-buying-power')
      );

      expect(buyingPowerDe).toBeTruthy();
    });
    it('should have a place to display cash', () => {
      const cashDe = fixture.debugElement.query(By.css('#user-cash'));

      expect(cashDe).toBeTruthy();
    });
  });

  it('should have #accountState$ injected', () => {
    expect(component.accountState$).toBeTruthy();
  });
});
