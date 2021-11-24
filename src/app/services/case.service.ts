import { Injectable } from '@angular/core';
import { Case, Case1, CasePossibility } from 'models/Case';
@Injectable({
  providedIn: 'root',
})
export class CaseService {
  feedback: string[] = [];
  currentCase?: Case;

  constructor() {}

  startSimulation() {
    this.feedback = [];
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
    if(cp.criticalFailure){
      this.addFeedback("Case Failed!")
    }
  }
}
