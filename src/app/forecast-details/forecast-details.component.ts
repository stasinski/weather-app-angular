import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss'],
})
export class ForecastDetailsComponent implements OnInit {
  error = false;
  weatherData: { [key: string]: unknown } = {};

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const value = params.get('location');
      this.searchLocation(value ? value : '');
    });
  }

  ngOnInit(): void {}

  searchLocation(searchValue: string) {
    this.weatherService.getForecast(searchValue).subscribe(
      (data) => {
        this.weatherData = data;
        this.error = false;
      },
      () => {
        this.weatherData = {};
        this.error = true;
        this.router.navigate(['/unknown']);
      }
    );
  }
}
