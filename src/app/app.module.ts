import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionsFormComponent } from './directions/directions-form/directions-form.component';
import { DirectionsDisplayComponent } from './directions/directions-display/directions-display.component';
import { ErrorComponent } from './error/error.component';
import { DirectionsComponent } from './directions/directions.component';
import { HeaderComponent } from './header/header.component';
import { MarblesComponent } from './marbles/marbles.component';
import { AlpacaComponent } from './alpaca/alpaca.component';
import { AlpacaNavComponent } from './alpaca/alpaca-nav/alpaca-nav.component';
import { AlpacaDashboardComponent } from './alpaca/alpaca-dashboard/alpaca-dashboard.component';
import { AlpacaPositionsComponent } from './alpaca/alpaca-positions/alpaca-positions.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionsDisplayComponent,
    DirectionsFormComponent,
    ErrorComponent,
    DirectionsComponent,
    HeaderComponent,
    MarblesComponent,
    AlpacaComponent,
    AlpacaNavComponent,
    AlpacaDashboardComponent,
    AlpacaPositionsComponent,
  ],
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
