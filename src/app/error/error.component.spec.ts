import { HttpErrorResponse } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display without an error', () => {
    const mainContainerDe = fixture.debugElement.query(
      By.css('#error-component-container')
    );
    expect(mainContainerDe).toBeFalsy();
  });

  it('should display an error name and message for Error type', () => {
    component.error = new Error('Test error');
    fixture.detectChanges();
    const errorNameDe = fixture.debugElement.query(
      By.css('#error-component-name')
    );
    const errorMessageDe = fixture.debugElement.query(
      By.css('#error-component-message')
    );

    expect(errorNameDe).toBeTruthy();
    expect(errorMessageDe).toBeTruthy();
  });

  it('should display an error name and message for HttpErrorResponse type', () => {
    component.error = new HttpErrorResponse({
      status: 400,
      statusText: 'An error ocurred',
    });
    fixture.detectChanges();
    const errorNameDe = fixture.debugElement.query(
      By.css('#error-component-name')
    );
    const errorMessageDe = fixture.debugElement.query(
      By.css('#error-component-message')
    );

    expect(errorNameDe).toBeTruthy();
    expect(errorMessageDe).toBeTruthy();
  });
});
