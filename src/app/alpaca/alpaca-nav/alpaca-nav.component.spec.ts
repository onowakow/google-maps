import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlpacaNavComponent } from './alpaca-nav.component';

describe('SidebarComponent', () => {
  let component: AlpacaNavComponent;
  let fixture: ComponentFixture<AlpacaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlpacaNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlpacaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to navigate to dashboard', () => {
    const sidebarDe = fixture.debugElement;
    const dashboardLinkDe = sidebarDe.query(By.css('#dashboard-link'));
    const dashboardLinkEl = dashboardLinkDe.nativeElement;

    const link = dashboardLinkEl.getAttribute('routerLink');
    expect(link).toEqual('/alpaca');
  });
  it('should have a link to navigate to positions', () => {
    const sidebarDe = fixture.debugElement;
    const dashboardLinkDe = sidebarDe.query(By.css('#positions-link'));
    const dashboardLinkEl = dashboardLinkDe.nativeElement;

    const link = dashboardLinkEl.getAttribute('routerLink');
    expect(link).toEqual('/alpaca/positions');
  });
  it('should have a link to navigate to trade', () => {
    const sidebarDe = fixture.debugElement;
    const dashboardLinkDe = sidebarDe.query(By.css('#trade-link'));
    const dashboardLinkEl = dashboardLinkDe.nativeElement;

    const link = dashboardLinkEl.getAttribute('routerLink');
    expect(link).toEqual('/alpaca/trade');
  });
});
