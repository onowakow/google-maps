import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DirectionsService } from '../directions.service';

@Component({
  selector: 'app-directions-form',
  templateUrl: './directions-form.component.html',
  styleUrls: ['./directions-form.component.css'],
})
export class DirectionsFormComponent {
  directionRequestForm = new FormGroup({
    origin: new FormControl('Laramie, WY', { nonNullable: true }),
    destination: new FormControl('Fort Collins, CO', { nonNullable: true }),
  });

  constructor(private directionsService: DirectionsService) {}

  onSubmit() {
    this.directionsService.params = this.directionRequestForm.getRawValue();
  }
}
