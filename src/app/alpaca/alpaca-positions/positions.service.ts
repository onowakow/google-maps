import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Position } from './position.model';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private _positionsErrorSubject$ = new BehaviorSubject<
    HttpErrorResponse | Error | null
  >(null);
  private _positionsRequest$ = this.httpClient
    .get<Position[]>(`${API_URL}/alpaca/positions`)
    .pipe(
      catchError(async (error) => {
        this._positionsErrorSubject$.next(error);

        return null;
      })
    );

  constructor(private httpClient: HttpClient) {}

  positions$ = this._positionsRequest$;
  positionsError$ = this._positionsErrorSubject$.asObservable();
  positionsLoading$ = of(false);
}
