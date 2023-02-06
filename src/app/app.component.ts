import { Component } from '@angular/core';
import { DirectionsService } from './directions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _directionsService: DirectionsService) {}

  directions$ = this._directionsService.directions$;
}
