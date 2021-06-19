import { Injectable } from '@angular/core';
import { Component } from '../classes/Component';
import { ComponentProperties } from '../classes/ComponentProperties';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private components: Component[] = [];

  constructor() {
    this.generateComponents();
  }

  private generateComponents() {
    const a = new Component('dunneBinnenjas', [ComponentProperties.COLD_COMFORTABLE]);
    const b = new Component('buitenjas', [ComponentProperties.WIND_RESISTENT, ComponentProperties.RAIN_RESISTENT])
    const c = new Component('dikkeBinnenjas', [ComponentProperties.FREEZE_RESISTENT])

    this.components.push(a, b, c);

  }

  getComponentRecommendations(requiredProperties: ComponentProperties[]): Component[] {
    const recommendedComponents: Component[] = [];

    requiredProperties.forEach(property => {
      const foundComponent = this.components.find(component => component.properties.includes(property));
      recommendedComponents.push(foundComponent);
    });
    
    return  [...new Set(recommendedComponents)]; // Using a set removes duplicate components
  }
}
