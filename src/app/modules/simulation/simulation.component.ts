import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  
  history = ["Case History: LVAD patient DH (58YO male) was presented to the Emergency Department after he jumped in the pool to save his son who he thought was drowning","test","yee"]

  constructor() { }

  ngOnInit(): void {
  }

}
