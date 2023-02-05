import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-directions-request-input',
  templateUrl: './directions-request-input.component.html',
  styleUrls: ['./directions-request-input.component.css'],
})
export class DirectionsRequestInputComponent {
  directionRequestForm = new FormGroup({
    origin: new FormControl('Laramie, WY'),
    destination: new FormControl('Fort Collins, CO'),
  });

  onSubmit() {
    /**
     * Eventually send form value to Subject and let another component call
     */
    console.warn(this.directionRequestForm.value);
  }
}
