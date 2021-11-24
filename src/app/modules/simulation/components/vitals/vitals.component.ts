import { Component, Input, OnInit } from '@angular/core';
import { Case, CasePossibility } from 'models/Case';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {
  constructor(public caseService: CaseService) {}
  cps: CasePossibility[] = [];
  ngOnInit(): void {
    if (this.caseService.currentCase?.vitals) {
      for (const key in this.caseService.currentCase.vitals) {
        let cp = (this.caseService.currentCase.vitals as any)[key];
        this.cps.push(cp);
      }
      console.log(this.cps)
    }
  }
}
