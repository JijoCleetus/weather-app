import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { List, MasterWeather, WeatherData } from '../../models/weather.interface';

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.css'],
})
export class WeatherPredictionComponent implements OnInit, OnChanges {
  @Input() weatherData: WeatherData[] = [] as WeatherData[];
  isDataLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.weatherData?.length>0) {
      this.isDataLoaded = true;
    }
  }
}
