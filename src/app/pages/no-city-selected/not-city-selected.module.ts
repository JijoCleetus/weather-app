import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoCitySelectedComponent } from './no-city-selected.component';

@NgModule({
  declarations: [NoCitySelectedComponent],
  imports: [BrowserModule, MaterialModule, ReactiveFormsModule, SharedModule],
  providers: [ApiService],
  exports: [MaterialModule],
})
export class NoCitySelectedModule {}
