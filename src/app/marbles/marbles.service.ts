import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

interface Name {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class MarblesService {
  constructor(private http: HttpClient) {}

  private _name$ = new Subject<Name>();

  libraryName$ = this._name$.pipe(
    switchMap((name: Name) => {
      return this.http.post(`${API_URL}/name`, name);
    })
  );

  submitName(name: Name) {
    this._name$.next(name);
  }
}
