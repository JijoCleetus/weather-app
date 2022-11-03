import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  convertFahrenheitToCelsius(temperature: number): number {
    // (°F - 32) / 1.8 = °C
    let tempData = temperature - 32;
    return tempData / 1.8;
  }
  convertKelvinToCelsius(temperature: number): number {
    // K − 273.15 = -273.1°C
    return temperature-273.15;
  }
}
