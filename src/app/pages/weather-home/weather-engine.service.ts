import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  MasterWeather,
  WeatherResponse,
} from 'src/app/shared/models/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherEngineService {
  private weatherData: MasterWeather[] = {} as MasterWeather[];
  private today: number = new Date().getDate();

  constructor() {}

  public get weather(): MasterWeather[] {
    return this.weatherData;
  }

  public set weather(v: MasterWeather[]) {
    this.weatherData = v;
  }

  prepareWeather(data: WeatherResponse): void {
    
  }
}
