import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { WeatherHomeComponent } from './weather-home.component';

const weatherRoutes: Routes = [
    { path: '', component: WeatherHomeComponent },
  ];

@NgModule({
  declarations: [WeatherHomeComponent],
  imports: [
    RouterModule.forChild(weatherRoutes),
    MaterialModule,
    ReactiveFormsModule,
],
  providers: [ApiService],
  exports: [MaterialModule,RouterModule],
})
export class WeatherHomeModule {}
