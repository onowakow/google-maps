import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  positions$ = of([]);
  positionsError$ = of([]);
  positionsLoading$ = of([]);
  // constructor() {}
}
