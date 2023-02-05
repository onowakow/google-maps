import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DirectionParams } from './shared/directionParams.model';
import { Observable } from 'rxjs';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class DirectionsService {
  constructor(private http: HttpClient) {}

  getDirections$(parameters: DirectionParams): Observable<unknown> {
    const params = new HttpParams({ fromObject: parameters });

    return this.http.get(`${API_URL}/directions`, { params });
  }
}
