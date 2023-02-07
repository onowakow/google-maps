import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DirectionsService } from '../directions.service';

@Component({
  selector: 'app-directions-form',
  templateUrl: './directions-form.component.html',
  styleUrls: ['./directions-form.component.css'],
})
export class DirectionsFormComponent {
  @Input() directionsLoading: boolean;

  directionRequestForm = new FormGroup({
    origin: new FormControl('Laramie, WY', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    destination: new FormControl('Fort Collins, CO', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private directionsService: DirectionsService) {}

  onSubmit() {
    if (this.directionRequestForm.invalid) {
      return;
    }
    this.directionsService.updateDirectionParams(
      this.directionRequestForm.getRawValue()
    );
  }
}
