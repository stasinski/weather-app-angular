import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchLocation = '';

  weatherData: { [key: string]: unknown } = {};

  constructor(private route: Router) {}

  ngOnInit(): void {}

  handleSubmit = () => {
    if (this.searchLocation.trim()) {
      this.route.navigate([this.searchLocation.trim()]);
    }
  };
}
