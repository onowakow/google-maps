import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { isObservable } from 'rxjs';
import { MarblesComponent } from './marbles.component';
import { environment } from 'src/environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
const { API_URL } = environment;

describe('MarblesComponent', () => {
  let component: MarblesComponent;
  let fixture: ComponentFixture<MarblesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarblesComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MarblesComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render', () => {
    let marblesDe: DebugElement;

    beforeEach(() => {
      marblesDe = fixture.debugElement;
    });

    describe('Name form', () => {
      let nameFormDe: DebugElement;

      beforeEach(() => {
        nameFormDe = marblesDe.query(By.css('#nameForm'));
      });

      it('should exist', () => {
        expect(nameFormDe).toBeTruthy();
      });

      it('should have a firstName input', () => {
        const firstNameInputDe = nameFormDe.query(
          By.css('input#firstNameInput')
        );
        expect(firstNameInputDe).toBeTruthy();
      });

      it('should have a lastName input', () => {
        const lastNameInputDe = nameFormDe.query(By.css('input#lastNameInput'));
        expect(lastNameInputDe).toBeTruthy();
      });

      it('should have a submit button', () => {
        const submitDe = nameFormDe.query(By.css('button[type=submit]'));
        expect(submitDe).toBeTruthy();
      });
    });
  });

  describe('Name form', () => {
    it('should require a firstName input', () => {
      component.nameForm.setValue({
        firstName: '',
        lastName: 'Jones',
      });

      expect(component.nameForm.valid).toEqual(false);
    });

    it('should require a lastName input', () => {
      component.nameForm.setValue({
        firstName: 'Bobby',
        lastName: '',
      });

      expect(component.nameForm.valid).toEqual(false);
    });

    it('should be valid if firstName and lastName are valid', () => {
      component.nameForm.setValue({
        firstName: 'Bobby',
        lastName: 'Jones',
      });

      expect(component.nameForm.valid).toEqual(true);
    });
  });

  describe('#onSubmitName', () => {
    it('should exist', () => {
      expect(component.onSubmitName).toBeTruthy();
    });

    it('should return false if form is invalid', () => {
      component.nameForm.setValue({
        firstName: '',
        lastName: '',
      });

      const isValid = component.onSubmitName();
      expect(isValid).toBeFalse();
    });
  });
});
