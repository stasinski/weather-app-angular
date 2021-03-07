import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  _urlStart = 'https://api.openweathermap.org/data/2.5/weather';
  _urlEnd = '&units=metric&appid=5e2d7dd0e286e305479a4fc59d919753';

  constructor(private http: HttpClient) {}

  getForecast(_location?: string): Observable<any> {
    const location = _location;
    const locationParam = `?q=${location.trim()}`;

    return this.http
      .get(this._urlStart + locationParam + this._urlEnd)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
