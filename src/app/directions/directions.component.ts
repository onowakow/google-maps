import { Component, OnInit } from '@angular/core';
import { DirectionsService } from '../directions.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css'],
})
export class DirectionsComponent implements OnInit {
  constructor(private _directions: DirectionsService) {}

  directions$ = this._directions.directions$;

  ngOnInit() {
    this.directions$.subscribe((val) => console.log(val));
  }
}
