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
    const a = new Component('Dunne binnenjas', '../../../assets/img/fleece-jack.jpg', [ComponentProperties.COLD_COMFORTABLE]);
    const b = new Component('Waterdichte buitenjas', '../../../assets/img/warmte-jack.jpg', [ComponentProperties.WIND_RESISTENT, ComponentProperties.RAIN_RESISTENT])
    const c = new Component('Dikke binnenjas', '../../../assets/img/warmtejack+jas.jpg', [ComponentProperties.FREEZE_RESISTENT])

    this.components.push(a, b, c);

  }

  getComponentRecommendations(requiredProperties: ComponentProperties[]): Component[] {
    const recommendedComponents: Component[] = [];

    requiredProperties.forEach(property => {
      const foundComponent = this.components.find(component => component.properties.includes(property));
      // recommendedComponents.push(foundComponent);
      foundComponent.isRecommended = true;
    });
    
    return this.components;
    return  [...new Set(recommendedComponents)]; // Using a set removes duplicate components
  }
}
