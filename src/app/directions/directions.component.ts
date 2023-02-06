import { Component, Input } from '@angular/core';
import { Directions } from '../shared/directions.model';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css'],
})
export class DirectionsComponent {
  @Input() directions: Directions;
}
