import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

const sharedComponents = [
  CitySelectorComponent,
  WeatherIconComponent,
  WeatherWidgetComponent,
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [MaterialModule, ReactiveFormsModule],
  providers: [],
  exports: [...sharedComponents],
})
export class SharedModule {}
