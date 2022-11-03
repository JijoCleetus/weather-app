import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.interface';
import { Observable, map } from 'rxjs';
import { WeatherResponse } from '../models/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getCityDetails(city: string): Observable<City[]> {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=fe3695759da76e0c9dcaf566634a08ed`;
    return this.httpClient.get<City[]>(url);
  }

  getWeatherData(data: City): Observable<WeatherResponse> {
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=fe3695759da76e0c9dcaf566634a08ed`;
    return this.httpClient.get<WeatherResponse>(url);
  }
}
