import { Component, Input, OnInit } from '@angular/core';
import { List, MasterWeather } from '../../models/weather.interface';

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.css'],
})
export class WeatherPredictionComponent implements OnInit {
  @Input() weatherData: List[] = [] as List[];

  masterWeatherData: MasterWeather = {} as MasterWeather;

  constructor() {}

  ngOnInit(): void {}
}
