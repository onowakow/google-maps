import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionsService } from './positions.service';

@Component({
  selector: 'app-alpaca-positions',
  templateUrl: './alpaca-positions.component.html',
  styleUrls: ['./alpaca-positions.component.css'],
})
export class AlpacaPositionsComponent {
  positions$: Observable<any> = this._positionsService.positions$;
  positionsError$: Observable<any> = this._positionsService.positionsError$;
  positionsLoading$: Observable<any> = this._positionsService.positionsLoading$;

  constructor(private _positionsService: PositionsService) {}
}
