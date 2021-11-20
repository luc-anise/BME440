import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulationComponent } from './simulation.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard' },
  { path: ':id', component: SimulationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {}
