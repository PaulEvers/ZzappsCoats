import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription()
  weatherData$: Observable<any>;
  components: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherData$ = this.weatherService.getWeatherData();
    const sub = this.weatherData$.subscribe(data => {

      // UNCOMMENT TO MOCK DATA:
      // data.isRaining = true;
      // data.temperature = 5      
      
      const recommendations = this.weatherService.getCoatRecommendation(data);
      this.components = recommendations;
    })

    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
