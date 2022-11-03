import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private selectedCity: City = {
    name: '',
    id: 0,
    lat: '',
    lon: '',
    country:''
  };

  public get value() : City {
    return this.selectedCity
  }

  public set value(v : City) {
    this.selectedCity = v;
  }
  
   
}
