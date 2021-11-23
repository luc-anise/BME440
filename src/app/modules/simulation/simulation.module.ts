import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { ControllerComponent } from './components/controller/controller.component';
import { LvadTeamComponent } from './components/lvad-team/lvad-team.component';


@NgModule({
  declarations: [
    SimulationComponent,
    CaseDetailsComponent,
    FeedbackComponent,
    VitalsComponent,
    ControllerComponent,
    LvadTeamComponent
  ],  
  imports: [
    CommonModule,
    SimulationRoutingModule
  ]
})
export class SimulationModule { }
