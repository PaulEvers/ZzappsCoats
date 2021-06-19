import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '../classes/Component';
import { ComponentProperties } from '../classes/ComponentProperties';
import { WeatherData } from '../classes/WeatherData';
import { ComponentService } from './component.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private componentService: ComponentService) { }

  getWeatherData(): Observable<WeatherData> {
    return this.http.get('http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam').pipe(map((response: any) => {
      const data = response.liveweer[0];
      
      const weatherData: WeatherData = {
        temperature: data.temp,
        isRaining: data.d0neerslag > 50 ? true : false,
        isWindy:  data.d0windk > 5 ? true : false,
      }

      return weatherData;
    }));
  }

  getCoatRecommendation(weatherData: WeatherData): Component[] {
    const requiredProperties: ComponentProperties[] = [];

    weatherData.isRaining ? requiredProperties.push(ComponentProperties.RAIN_RESISTENT) : '';
    weatherData.isWindy ? requiredProperties.push(ComponentProperties.WIND_RESISTENT) : '';
    weatherData.temperature < 0 ? requiredProperties.push(ComponentProperties.FREEZE_RESISTENT) : '';
    weatherData.temperature >= 0 && weatherData.temperature < 12 ?  requiredProperties.push(ComponentProperties.COLD_COMFORTABLE) : ''; // TODO: Er is gekozen voor 12 graden als koud genoeg om extra comfort toe te voegen. Is deze temperatuur geschikt daarvoor?

    return this.componentService.getComponentRecommendations(requiredProperties);
  }

}
