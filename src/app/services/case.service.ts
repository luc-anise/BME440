import { Injectable } from '@angular/core';
import { Case, Case1, CasePossibility } from 'models/Case';
@Injectable({
  providedIn: 'root',
})
export class CaseService {
  feedback: string[] = [];
  currentCase?: Case;
  clickedPossibilities: CasePossibility[] = [];
  currentSimulation = {
    failed: false,
    complete: false,
  };

  constructor() {}

  startSimulation() {
    this.feedback = [];
    this.clickedPossibilities = [];
    this.currentSimulation = { failed: false, complete: false };
  }

  addFeedback(feedback: string) {
    this.feedback.unshift(feedback);
  }

  getCaseById(id: string): Promise<Case> {
    let promise = new Promise<Case>((res, rej) => {
      res(Case1);
    });
    return promise;
  }

  setCurrentCase(c: Case) {
    this.currentCase = c;
  }

  handleCasePossiblity(cp: CasePossibility) {
    this.addFeedback(cp.feedback);
    cp.checkedByUser = true;
    console.log(this.currentCase);
    this.clickedPossibilities.push(cp);
    if (cp.criticalFailure) {
      this.addFeedback('Case Failed!');
      this.currentSimulation.failed = true;
    }
  }
}
