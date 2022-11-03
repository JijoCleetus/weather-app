import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as moment from 'moment';
import { City } from '../../models/city.interface';
import { List } from '../../models/weather.interface';
import { DataService } from '../../services/data.service';
import { UtilityService } from '../../utilities/utils';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit, OnChanges {
  @Input() weatherData:List={} as List;
  @Input() city: City={} as City; // List= as List;
  now: string = '';
  longText = `Mostly cloudy for the hour.`;
  isDataAvailable: boolean = false;
  temperature: number = 0 as number;
  iconUrl: string = 'http://openweathermap.org/img/w/';
  weatherIconUrl: string = '';
  weatherDescription: string = '';
  windSpeed: number = 0;

  constructor(
    private utils: UtilityService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.now = moment().format('MMM DD, h:mm A');
  }

  ngOnChanges(): void {
    if (this.weatherData) {
      this.isDataAvailable = true;
      this.prepareData();
    }
  }

  prepareData(): void {
    this.temperature = Math.floor(
      this.utils.convertKelvinToCelsius(this.weatherData.main.feels_like)
    );
    this.weatherDescription = this.weatherData.weather[0].description;
    this.windSpeed = this.weatherData.wind.speed;
    this.weatherIconUrl = this.getWeatherIconUrl();
  }

  getWeatherIconUrl(): string {
    return `${this.iconUrl}${this.weatherData.weather[0].icon}.png`;
  }
}
