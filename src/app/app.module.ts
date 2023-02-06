import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionsFormComponent } from './directions-form/directions-form.component';
import { DirectionsComponent } from './directions/directions.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, DirectionsComponent, DirectionsFormComponent, ErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
