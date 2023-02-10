import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

interface Account {
  account_number: string;
  cash: string;
  buying_power: string;
  equity: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlpacaService {
  constructor(private http: HttpClient) {}

  accountState$: Observable<Account> = this.http.get<Account>(
    `${API_URL}/alpaca/account`
  );
}
