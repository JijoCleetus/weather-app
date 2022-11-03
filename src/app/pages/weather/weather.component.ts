import { Component, OnInit } from '@angular/core';
import { mockCities } from 'src/app/shared/data/cities.mock';
import { City } from 'src/app/shared/models/city.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  cities: City[] = mockCities;
  cityForm = this.formBuilder.group({
    city: ['', Validators.required],
  });

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router:Router
  ) {}

  ngOnInit(): void {}

  onSubmit():void {
    let city = this.cityForm.value.city as string;
    if (this.cityForm.valid) {
      this.apiService.getCityDetails(city).subscribe({
        next: (res) => {
          let val;
          if (res.length > 0) {
            val = res.filter((data) => {
              return data.name === city && data.country === 'GB';
            });
            this.dataService.value = val.pop() as City;
            this.router.navigate(['weather']);
          }
        },
        error: (err) => {
          console.log('Something wrong happened', err);
        },
        complete: () => console.info('complete'),
      });
    }
  }
}
