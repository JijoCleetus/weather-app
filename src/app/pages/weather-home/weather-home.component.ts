import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/models/city.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data.service';
import * as moment from 'moment';
import { UtilityService } from 'src/app/shared/utilities/utils';
import { Router } from '@angular/router';
import { mockCities } from 'src/app/shared/data/cities.mock';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css'],
})
export class WeatherHomeComponent implements OnInit {
  cities: City[] = mockCities;
  longText = `Mostly cloudy for the hour.`;
  selectedCity: City = this.dataService.value;
  now: string = '';
  isDataAvailable: boolean = false;
  temperature: number = 0 as number;
  weatherIconUrl: string = 'http://openweathermap.org/img/w/';
  weatherDescription: string = '';
  windSpeed: number = 0;
  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private utils: UtilityService,
    private router: Router
  ) {
    if (this.selectedCity.name === '') {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.now = moment().format('MMM DD, h:mm A');
    this.fetchWeather();
  }

  fetchWeather() {
    console.log(this.selectedCity);
    this.apiService.getWeatherData(this.selectedCity).subscribe({
      next: (res) => {
        this.isDataAvailable = true;
        console.log(res);
        this.temperature = Math.floor(
          this.utils.convertKelvinToCelsius(res.list[0].main.feels_like)
        );
        console.log(res.list[0].weather[0].icon);
        console.log(res.list[0].weather);
        this.weatherIconUrl = `${this.weatherIconUrl}${res.list[0].weather[0].icon}.png`;
        this.weatherDescription = res.list[0].weather[0].description;
        this.windSpeed = res.list[0].wind.speed;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.info('complete'),
    });
  }

  setCity(value: City) {
    this.dataService.value = this.selectedCity = value as City;
    this.fetchWeather();
  }
}
