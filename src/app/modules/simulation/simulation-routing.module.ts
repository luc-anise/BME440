import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './components/controller/controller.component';
import { LvadTeamComponent } from './components/lvad-team/lvad-team.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { SimulationComponent } from './simulation.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard' },
  {
    path: ':id',
    component: SimulationComponent,
    children: [
      { path: 'vitals', component: VitalsComponent },
      { path: 'lvadTeam', component: LvadTeamComponent },
      { path: 'controller', component: ControllerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {}
