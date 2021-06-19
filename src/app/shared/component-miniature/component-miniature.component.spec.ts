import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMiniatureComponent } from './component-miniature.component';

describe('ComponentMiniatureComponent', () => {
  let component: ComponentMiniatureComponent;
  let fixture: ComponentFixture<ComponentMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMiniatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
