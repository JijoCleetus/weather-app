import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.interface';
import { Observable, map } from 'rxjs';
import { WeatherResponse } from '../models/weather.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  environment=environment;
  getCityDetails(city: string): Observable<City[]> {
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${environment.API_KEY}`;
    return this.httpClient.get<City[]>(url);
  }
  getWeatherData(data: City): Observable<WeatherResponse> {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${environment.API_KEY}`;
    return this.httpClient.get<WeatherResponse>(url);
  }
}
