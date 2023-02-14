import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

interface Position {
  symbol: string;
  exchange: string;
  qty: string;
  current_price: string;
  change_today: string;
}
@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  // Refactor for Positions type
  // Add tests for error and loading
  // Work into _positionsRequest$
  private _positionsRequest$ = this.httpClient.get<Position>(
    `${API_URL}/alpaca/positions`
  );

  constructor(private httpClient: HttpClient) {}

  positions$ = this._positionsRequest$;
  positionsError$ = of([]);
  positionsLoading$ = of([]);
}
