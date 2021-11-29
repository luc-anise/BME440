import { Injectable } from '@angular/core';
import { Case, Case1, CasePossibility, key } from 'models/Case';
@Injectable({
  providedIn: 'root',
})
export class CaseService {
  feedback: string[] = [];
  currentCase?: Case;
  clickedPossibilities: CasePossibility[] = [];
  clickedPossibilitiesIds: string[] = [];
  currentSimulation = {
    failed: false,
    complete: false,
  };

  constructor() {}

  startSimulation() {
    this.feedback = [];
    this.clickedPossibilities = [];
    this.currentSimulation = { failed: false, complete: false };
    // TODO: Timer, how long it took user to complete sim
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
    this.clickedPossibilitiesIds.push(cp.id);
    if (cp.criticalFailure) {
      this.addFeedback('Case Failed!');
      this.currentSimulation.failed = true;
    }

    if (this.clickedPossibilitiesIds.length === key.length) {
      try {
        this.clickedPossibilitiesIds.forEach((item, index) => {
          if (key[index] !== item) {
            this.addFeedback('Case Failed! Something was done out of order.');
            this.currentSimulation.failed = true;
            throw {
              index,
              feedback: this.clickedPossibilities[index].feedback,
            };
          }
        });
      } catch (error) {
        let err: { index: number; feedback: string } = error as {
          index: number;
          feedback: string;
        };
        // TODO: Improve feedback to user, should have better explainations as to why what they did is incorrect, maybe print out all the steps they clicked an in what order etc.
        this.addFeedback(
          `Step ${err.index} was incorrect because ${err.feedback}`
        );
      }

      if (!this.currentSimulation.failed) {
        this.currentSimulation.complete = true;
        this.addFeedback('Simulation Complete!');
      }
    }
  }
}
