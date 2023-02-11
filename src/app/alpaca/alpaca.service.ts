import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './shared/account.model';
import { HttpRequestState } from './shared/httpRequestState.model';
const { API_URL } = environment;
@Injectable({
  providedIn: 'root',
})
export class AlpacaService {
  constructor(private http: HttpClient) {}

  accountState$: Observable<HttpRequestState<Account | unknown>> = this.http
    .get<Account>(`${API_URL}/alpaca/account`)
    .pipe(
      map((value: Account) => {
        const state = new HttpRequestState(false, value);
        return state;
      }),
      catchError((error) => of(new HttpRequestState(false, null, error))),
      startWith(new HttpRequestState(true))
    );
}
