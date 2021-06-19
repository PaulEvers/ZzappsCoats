import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weatherData$: Observable<any>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherData$ = this.weatherService.getWeatherData();
  }

}
