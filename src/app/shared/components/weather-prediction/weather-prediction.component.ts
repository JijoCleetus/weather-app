import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { APP_CONST } from '../../constants/app.constants';
import { List, MasterWeather, WeatherData } from '../../models/weather.interface';

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.css'],
})
export class WeatherPredictionComponent implements OnInit, OnChanges {
  @Input() weatherData: WeatherData[] = [] as WeatherData[];
  isDataLoaded: boolean = false;

  APP_CONST=APP_CONST;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.weatherData?.length>0) {
      this.isDataLoaded = true;
    }
  }
}
