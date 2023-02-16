import { Component } from '@angular/core';
import { PositionsService } from './positions.service';

@Component({
  selector: 'app-alpaca-positions',
  templateUrl: './alpaca-positions.component.html',
  styleUrls: ['./alpaca-positions.component.css'],
})
export class AlpacaPositionsComponent {
  positions$ = this._positionsService.positions$;

  constructor(private _positionsService: PositionsService) {}
}
