import { HttpErrorResponse } from '@angular/common/http';

export class HttpRequestState<T> {
  constructor(
    public isLoading: boolean = false,
    public value: T,
    public error: HttpErrorResponse | Error | null = null
  ) {}
}
