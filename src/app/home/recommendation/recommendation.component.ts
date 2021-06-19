import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  @Input() components: Component[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
