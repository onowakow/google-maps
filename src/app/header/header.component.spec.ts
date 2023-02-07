import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const titleDe: DebugElement = fixture.debugElement.query(
      By.css('#nav-title')
    );
    const titleEl: HTMLElement = titleDe.nativeElement;
    const expectedTitle = 'Test Title';
    component.title = expectedTitle;
    fixture.detectChanges();

    expect(titleEl.textContent).toContain(expectedTitle);
  });
});
