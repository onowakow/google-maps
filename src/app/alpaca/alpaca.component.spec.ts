import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaComponent } from './alpaca.component';
import { AlpacaNavComponent } from './alpaca-nav/alpaca-nav.component';
import { AlpacaDashboardComponent } from './alpaca-dashboard/alpaca-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AlpacaComponent', () => {
  let component: AlpacaComponent;
  let fixture: ComponentFixture<AlpacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AlpacaComponent,
        AlpacaNavComponent,
        AlpacaDashboardComponent,
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AlpacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the nav component', () => {
    expect(fixture.debugElement.query(By.css('app-alpaca-nav'))).toBeTruthy();
  });

  it('should show the dashboard component', () => {
    expect(
      fixture.debugElement.query(By.css('app-alpaca-dashboard'))
    ).toBeTruthy();
  });
});
