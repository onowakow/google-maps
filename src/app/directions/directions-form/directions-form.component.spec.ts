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
});
