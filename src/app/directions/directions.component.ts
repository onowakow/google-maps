import { Component } from '@angular/core';
import { DirectionsService } from './directions.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css'],
})
export class DirectionsComponent {
  constructor(private _directionsService: DirectionsService) {}

  directions$ = this._directionsService.directions$;
}
