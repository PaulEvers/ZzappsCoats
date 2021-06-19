import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-miniature',
  templateUrl: './component-miniature.component.html',
  styleUrls: ['./component-miniature.component.scss']
})
export class ComponentMiniatureComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() isRecommended: boolean = false;
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
