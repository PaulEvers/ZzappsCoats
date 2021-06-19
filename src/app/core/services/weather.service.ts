import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../classes/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get('http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam');
  }

  getCoatRecommendation(weatherData: WeatherData) {

  }
}
