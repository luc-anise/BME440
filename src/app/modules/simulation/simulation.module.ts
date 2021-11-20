import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';


@NgModule({
  declarations: [
    SimulationComponent
  ],  
  imports: [
    CommonModule,
    SimulationRoutingModule
  ]
})
export class SimulationModule { }
