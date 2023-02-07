import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsDisplayComponent } from './directions-display.component';

describe('DirectionsDisplayComponent', () => {
  let component: DirectionsDisplayComponent;
  let fixture: ComponentFixture<DirectionsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectionsDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
