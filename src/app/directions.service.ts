import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const { GOOGLE_MAPS_API_BASE_URL, GOOGLE_MAPS_API_KEY } = environment;

@Injectable({
  providedIn: 'root',
})
export class DirectionsService implements OnInit {
  private keyParam = { key: GOOGLE_MAPS_API_KEY };
  private params = {
    ...this.keyParam,
    origin: 'Laramie, WY',
    destination: 'Fort Collins, CO',
  };

  $directions = this.http.get(`${GOOGLE_MAPS_API_BASE_URL}`, {
    params: new HttpParams({ fromObject: this.params }),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
