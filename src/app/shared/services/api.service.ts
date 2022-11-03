import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getCityDetails(city: string): Observable<City[]> {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=fe3695759da76e0c9dcaf566634a08ed`;
    return this.httpClient.get<City[]>(url);
  }
  getWeatherData() {
    // this.httpClient.get()
  }
}
