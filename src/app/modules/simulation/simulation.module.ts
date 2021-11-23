import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


@NgModule({
  declarations: [
    SimulationComponent,
    CaseDetailsComponent,
    FeedbackComponent
  ],  
  imports: [
    CommonModule,
    SimulationRoutingModule
  ]
})
export class SimulationModule { }
