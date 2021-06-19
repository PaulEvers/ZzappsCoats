import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [HomeComponent, HeroComponent, RecommendationComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
