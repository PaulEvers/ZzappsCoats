import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentMiniatureComponent } from './component-miniature/component-miniature.component';



@NgModule({
  declarations: [ComponentMiniatureComponent],
  imports: [
    CommonModule
  ],
  exports: [ComponentMiniatureComponent]
})
export class SharedModule { }
