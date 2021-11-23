import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitalsComponent } from './components/vitals/vitals.component';
import { SimulationComponent } from './simulation.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard' },
  {
    path: ':id',
    component: SimulationComponent,
    children: [{ path: 'vitals', component: VitalsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {}
