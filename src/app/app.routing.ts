import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NoCitySelectedComponent } from './pages/no-city-selected/no-city-selected.component';
import { NoCitySelectedModule } from './pages/no-city-selected/not-city-selected.module';

const appRoutes: Routes = [
  { path: '', component: NoCitySelectedComponent },
  {
    path: 'weather',
    loadChildren: () =>
      import('./pages/weather-home/weather-home.module').then(
        (m) => m.WeatherHomeModule
      ),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    NoCitySelectedModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
