import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Position } from './position.model';
import { HttpRequestState } from '../shared/httpRequestState.model';

const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private _positionsRequest$: Observable<HttpRequestState<Position[] | []>> =
    this.httpClient.get<Position[]>(`${API_URL}/alpaca/positions`).pipe(
      map((value) => new HttpRequestState(false, value, null)),
      catchError((error) => of(new HttpRequestState(false, [], error))),
      startWith(new HttpRequestState(true, [], null))
    );

  constructor(private httpClient: HttpClient) {}

  positions$ = this._positionsRequest$;
}
