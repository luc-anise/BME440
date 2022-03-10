import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './components/controller/controller.component';
import { LabsComponent } from './components/labs/labs.component';
import { LvadTeamComponent } from './components/lvad-team/lvad-team.component';
import { ReportComponent } from './components/report/report.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { SimulationComponent } from './simulation.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard' },
  { path: 'report', component: ReportComponent },
  {
    path: ':id',
    component: SimulationComponent,
    children: [
      { path: 'vitals', component: VitalsComponent },
      { path: 'lvadTeam', component: LvadTeamComponent },
      { path: 'controller', component: ControllerComponent },
      { path: 'labs', component: LabsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {}
