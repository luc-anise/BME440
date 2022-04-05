import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { ControllerComponent } from './components/controller/controller.component';
import { LvadTeamComponent } from './components/lvad-team/lvad-team.component';
import { CaseButtonComponent } from './components/case-button/case-button.component';
import { ReportComponent } from './components/report/report.component';
import { LabsComponent } from './components/labs/labs.component';

import {ClipboardModule} from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    SimulationComponent,
    CaseDetailsComponent,
    FeedbackComponent,
    VitalsComponent,
    ControllerComponent,
    LvadTeamComponent,
    CaseButtonComponent,
    ReportComponent,
    LabsComponent,
    
  ],  
  imports: [
    CommonModule,
    SimulationRoutingModule,
    ClipboardModule
  ]
})
export class SimulationModule { }
