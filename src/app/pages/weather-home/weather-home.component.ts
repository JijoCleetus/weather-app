import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/models/city.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data.service';

import { UtilityService } from 'src/app/shared/utilities/utils';
import { Router } from '@angular/router';
import { mockCities } from 'src/app/shared/data/cities.mock';
import { WeatherEngineService } from './weather-engine.service';
import { List, MasterWeather } from 'src/app/shared/models/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  cities: City[] = mockCities;
  selectedCity: City = this.dataService.value;
  currentWeatherData: List = {} as List;
  predictionData: MasterWeather = {} as MasterWeather;

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private utils: UtilityService,
    private router: Router,
    private weatherEngine: WeatherEngineService
  ) {
    if (this.selectedCity.name === '') {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather() {
    
    this.apiService.getWeatherData(this.selectedCity).subscribe({
      next: (res) => {
        this.predictionData={}  as MasterWeather;
        this.currentWeatherData = res.list[0];
        this.selectedCity = res.city;
        this.predictionData = this.weatherEngine.prepareWeather(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.info('complete'),
    });
  }

  setCity(value: City) {
    this.selectedCity = value;
    // this.dataService.value = this.selectedCity = value as City;
    this.fetchWeather();
  }
}
