import { Component, Input } from '@angular/core';
import { Route } from '../directions.model';

@Component({
  selector: 'app-directions-display',
  templateUrl: './directions-display.component.html',
  styleUrls: ['./directions-display.component.css'],
})
export class DirectionsDisplayComponent {
  @Input() route: Route;
}
