import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/models/city.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data.service';
import * as moment from 'moment';
import { UtilityService } from 'src/app/shared/utilities/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css'],
})
export class WeatherHomeComponent implements OnInit {
  longText = `Mostly cloudy for the hour.`;
  selectedCity: City = this.dataService.value;
  now: string = '';
  temperature: number = 0 as number;
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
        console.log(res);
        this.temperature = Math.floor(this.utils.convertKelvinToCelsius(
          res.list[0].main.feels_like)
        );
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.info('complete'),
    });
  }
}
