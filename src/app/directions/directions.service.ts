import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { DirectionParams } from './directionParams.model';
import { Observable } from 'rxjs';
import { Directions } from './directions.model';
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
  constructor(private http: HttpClient) {}

  private _directionsParams$ = new BehaviorSubject<DirectionParams>({
    origin: '',
    destination: '',
  });

  private _directions$: Observable<HttpRequestState<Directions | null>> =
    this._directionsParams$.pipe(
      switchMap((params) => {
        if (!params.origin || !params.destination) {
          return of({
            isLoading: false,
          });
        }

        return this.getDirections(params).pipe(
          map((value: Directions) => {
            if (value.error_message) {
              throw new Error(`Google Maps API Error: ${value.error_message}`);
            }
            if (value.status !== 'OK') {
              throw new Error(`Google Maps API Error: ${value.status}`);
            }
            return { isLoading: false, value };
          }),
          catchError((error) => of({ isLoading: false, error })),
          startWith({ isLoading: true })
        );
      })
    );

  get directions$() {
    return this._directions$;
  }

  getDirections(params: DirectionParams) {
    return this.http.get(this._apiUrl, { params });
  }

  private _apiUrl = `${API_URL}/directions`;

  get apiUrl() {
    return this._apiUrl;
  }

  updateDirectionParams(params: DirectionParams) {
    this._directionsParams$.next(params);
  }
}
