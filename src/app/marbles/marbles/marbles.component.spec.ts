import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { isObservable } from 'rxjs';
import { MarblesComponent } from './marbles.component';

/**
 * should have a name input
 * should set a message that name is valid
 * should have a button to submit the name input
 */

describe('MarblesComponent', () => {
  let component: MarblesComponent;
  let fixture: ComponentFixture<MarblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarblesComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MarblesComponent);
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

    it('should return null if form is invalid', () => {
      component.nameForm.setValue({
        firstName: '',
        lastName: '',
      });

      const isValid = component.onSubmitName();
      expect(isValid).toBeFalse();
    });
  });

  describe('#name$', () => {
    it('should exist', () => {
      expect(component.name$).toBeTruthy();
    });

    it('should be observable', () => {
      expect(isObservable(component.name$)).toBeTruthy();
    });
  });
});
