import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DirectionsService } from '../directions.service';

@Component({
  selector: 'app-directions-request-input',
  templateUrl: './directions-request-input.component.html',
  styleUrls: ['./directions-request-input.component.css'],
})
export class DirectionsRequestInputComponent {
  directionRequestForm = new FormGroup({
    origin: new FormControl('Laramie, WY', { nonNullable: true }),
    destination: new FormControl('Fort Collins, CO', { nonNullable: true }),
  });

  constructor(private directionsService: DirectionsService) {}

  onSubmit() {
    const directions$ = this.directionsService.getDirections$(
      this.directionRequestForm.getRawValue()
    );

    directions$.subscribe((result) => {
      console.log(result);
    });
    /**
     * Eventually send form value to Subject and let another component call
     */
    console.warn(this.directionRequestForm.value);
  }
}
