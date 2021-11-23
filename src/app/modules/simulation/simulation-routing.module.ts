import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { SimulationComponent } from './simulation.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard' },
  { path: ':id', component: SimulationComponent },
  //{ path: ':id/details', component: CaseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {}
