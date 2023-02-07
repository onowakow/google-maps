import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectionsFormComponent } from './directions-form.component';

describe('DirectionsFormComponent', () => {
  let component: DirectionsFormComponent;
  let fixture: ComponentFixture<DirectionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [DirectionsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require origin', () => {
    component.directionRequestForm.setValue({
      origin: '',
      destination: 'There',
    });

    expect(component.directionRequestForm.valid).toEqual(false);
  });

  it('should require destination', () => {
    component.directionRequestForm.setValue({
      origin: 'Here',
      destination: '',
    });

    expect(component.directionRequestForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.directionRequestForm.setValue({
      origin: 'Here',
      destination: 'There',
    });

    expect(component.directionRequestForm.valid).toEqual(true);
  });
});
