import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { City } from '../../models/city.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
})
export class CitySelectorComponent implements OnInit {
  @Input() title: string = '';
  @Input() cities: City[] = [];
  @Input() value: string = '';
  @Input() isActionNeeded: boolean = false;
  @Output() citySelector = new EventEmitter();
  cityForm = this.formBuilder.group({
    city: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    if (this.value != '') {
      this.cityForm.patchValue({ city: this.value });
    }
  }

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
            this.citySelector.emit(val.pop() as City);
          }
        },
        error: (err) => {
          console.log('Something wrong happened', err);
        },
        complete: () => console.info('complete'),
      });
    }
  }

  onChange(event: MatSelectChange) {
    if (!this.isActionNeeded) {
      this.onSubmit();
    }
  }
}
