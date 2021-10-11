import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, DemoRoutingModule, MaterialModule, FormsModule],
  exports: [DemoRoutingModule],
})
export class DemoModule {}
