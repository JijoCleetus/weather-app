import { Injectable } from '@angular/core';
import {
  List,
  MasterWeather,
  WeatherData,
  WeatherResponse,
} from 'src/app/shared/models/weather.interface';

import * as moment from 'moment';
import { UtilityService } from 'src/app/shared/utilities/utils';

@Injectable({
  providedIn: 'root',
})
export class WeatherEngineService {
  private weatherData: MasterWeather = {} as MasterWeather;
  private today: number = new Date().getDate();
  iconUrl: string = 'http://openweathermap.org/img/wn/';
  d1: WeatherData[] = [];
  d2: WeatherData[] = [];
  d3: WeatherData[] = [];
  d4: WeatherData[] = [];
  d5: WeatherData[] = [];

  constructor(private utils: UtilityService) {}

  public get weather(): MasterWeather {
    return this.weatherData;
  }

  public set weather(v: MasterWeather) {
    this.weatherData = v;
  }

  clearData() {
    this.weatherData.weatherFeed = [];
    this.d1 = [];
    this.d2 = [];
    this.d3 = [];
    this.d4 = [];
    this.d5 = [];
  }

  prepareWeather(data: WeatherResponse): MasterWeather {
    let list = data.list;
    this.clearData();
    list.forEach((item, index) => {
      this.filterDayData(item);
    });
    this.weatherData.weatherFeed = [
      this.d1[0],
      this.d2[0],
      this.d3[0],
      this.d4[0],
      this.d5[0],
    ];
    this.weatherData.weatherFeed = this.weatherData.weatherFeed.filter(
      (element) => {
        return element !== undefined;
      }
    );
    return this.weatherData;
  }

  filterDayData(data: List) {
    let date = new Date(data.dt_txt).getDate();
    let formatedData: WeatherData = {
      date: moment(data.dt_txt).format('MMM DD, h:mm A'),
      weatherTitle: data.weather[0].main,
      weatherSubTitle: data.weather[0].description,
      icon: this.getWeatherIconUrl(data.weather[0].icon),
      windSpeed: data.wind.speed,
      temperature: Math.floor(
        this.utils.convertKelvinToCelsius(data.main.feels_like)
      ),
    };
    switch (date) {
      case this.today:
        this.d1.push(formatedData);
        break;
      case this.today + 1:
        this.d2.push(formatedData);
        break;
      case this.today + 2:
        this.d3.push(formatedData);
        break;
      case this.today + 3:
        this.d4.push(formatedData);
        break;
      case this.today + 4:
        this.d5.push(formatedData);
        break;
    }
  }

  getWeatherIconUrl(icon: string): string {
    return `${this.iconUrl}${icon}@4x.png`;
  }
}
