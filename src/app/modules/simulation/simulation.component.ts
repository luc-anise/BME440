import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'models/Case';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  currentCase?: Case;
  caseID = '';
  history = [
    'Case History: LVAD patient DH (58YO male) was presented to the Emergency Department after he jumped in the pool to save his son who he thought was drowning',
    'test',
    'yee',
  ];

  constructor(
    private caseService: CaseService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(async (parms) => {
      this.caseID = parms['id'];
      try {
        this.currentCase = await this.caseService.getCaseById(this.caseID);
        this.caseService.setCurrentCase(this.currentCase)
        console.log(this.currentCase);
      } catch (error) {
        console.error(error);
      }
    });
  }
}
