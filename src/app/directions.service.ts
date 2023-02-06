import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DirectionParams } from './shared/directionParams.model';
import { Observable, Subject } from 'rxjs';
const { API_URL } = environment;

export interface HttpRequestState<T> {
  isLoading: boolean;
  value?: T;
  error?: HttpErrorResponse | Error;
}

@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  private _params: DirectionParams | null = null;

  constructor(private http: HttpClient) {}

  private _refreshDirections$ = new Subject<void>();

  private _directions$: Observable<HttpRequestState<any | null>> =
    this._refreshDirections$.pipe(
      switchMap(() => {
        if (this._params === null) {
          return of({ isLoading: false, value: null });
        }

        return this.http
          .get(`${API_URL}/directions`, { params: this._params })
          .pipe(
            map((value) => ({ isLoading: false, value })),
            catchError((error) => of({ isLoading: false, error })),
            startWith({ isLoading: true })
          );
      })
    );

  get directions$() {
    return this._directions$;
  }

  set params(params: DirectionParams) {
    this._params = params;
    this._refreshDirections$.next();
  }
}
