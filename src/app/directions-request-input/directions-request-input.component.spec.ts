import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsRequestInputComponent } from './directions-request-input.component';

describe('DirectionsRequestInputComponent', () => {
  let component: DirectionsRequestInputComponent;
  let fixture: ComponentFixture<DirectionsRequestInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionsRequestInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionsRequestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
