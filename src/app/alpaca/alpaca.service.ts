import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  interval,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './shared/account.model';
import { HttpRequestState } from './shared/httpRequestState.model';
const { API_URL } = environment;
@Injectable({
  providedIn: 'root',
})
export class AlpacaService {
  constructor(private http: HttpClient) {}

  private _getAccountState = () =>
    this.http.get<Account>(`${API_URL}/alpaca/account`);

  accountState$: Observable<HttpRequestState<Account | null>> =
    this._getAccountState().pipe(
      map((account: Account) => new HttpRequestState(false, account)),
      catchError((error) => of(new HttpRequestState(false, null, error))),
      startWith(new HttpRequestState(true, null))
    );

  accountStatePoll$ = (
    pollInterval = 3000
  ): Observable<HttpRequestState<Account | null>> =>
    interval(pollInterval).pipe(
      switchMap(() => {
        return this._getAccountState().pipe(
          map((account: Account) => new HttpRequestState(false, account)),
          catchError((error) => of(new HttpRequestState(false, null, error)))
        );
      }),
      startWith(new HttpRequestState(true, null))
    );
}
