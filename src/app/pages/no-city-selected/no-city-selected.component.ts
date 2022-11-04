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
import { APP_CONST } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-no-city-selected',
  templateUrl: './no-city-selected.component.html',
  styleUrls: ['./no-city-selected.component.scss'],
})
export class NoCitySelectedComponent implements OnInit {
  cities: City[] = mockCities;
  cityForm = this.formBuilder.group({
    city: ['', Validators.required],
  });
  APP_CONST = APP_CONST;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
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

  setCity(value: City) {
    this.dataService.value = value as City;
    this.router.navigate(['weather']);
  }
}
