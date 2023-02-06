import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DirectionParams } from './shared/directionParams.model';
import { Observable, Subject } from 'rxjs';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  private _params: DirectionParams | null = null;

  constructor(private http: HttpClient) {}

  readonly loading$ = new BehaviorSubject<boolean>(false);

  private _refreshDirections$ = new Subject<void>();

  private _directions$: Observable<any | null> = this._refreshDirections$.pipe(
    tap(() => this.loading$.next(true)),
    switchMap(() => {
      if (this._params === null) {
        return of(null);
      }

      return this.http.get(`${API_URL}/directions`, { params: this._params });
    }),
    tap(() => this.loading$.next(false))
  );

  get directions$() {
    return this._directions$;
  }

  set params(params: DirectionParams) {
    this._params = params;
    this._refreshDirections$.next();
  }
}
