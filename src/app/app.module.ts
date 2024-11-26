import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({ declarations: [AppComponent, LoaderComponent],
    bootstrap: [AppComponent],
    exports: [AppRoutingModule], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
