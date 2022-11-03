import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  longText = `Mostly cloudy for the hour.`;
  constructor() { }

  ngOnInit(): void {
  }

}
