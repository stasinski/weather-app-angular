import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ForecastDetailsComponent } from './forecast-details/forecast-details.component';
import { FormsModule } from '@angular/forms';
import { UnknownLocationComponent } from './unknown-location/unknown-location.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ForecastDetailsComponent, UnknownLocationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpParams],
  bootstrap: [AppComponent],
})
export class AppModule {}
