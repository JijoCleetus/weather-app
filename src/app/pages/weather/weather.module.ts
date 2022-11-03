import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { WeatherComponent } from './weather.component';

const weatherRoutes: Routes = [
  { path: '', component: WeatherComponent },
];

@NgModule({
  declarations: [WeatherComponent],
  imports: [ MaterialModule,ReactiveFormsModule,RouterModule.forChild(weatherRoutes),],
  providers: [ApiService],
  exports: [MaterialModule],
})
export class WeatherModule {}
