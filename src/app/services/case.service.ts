import { Injectable } from '@angular/core';
import { Case, Case1, Case2, CasePossibility } from 'models/Case';
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

  startSimulation(c: Case) {
    this.feedback = [];
    this.clickedPossibilities = [];
    this.currentSimulation = { failed: false, complete: false };
    this.currentCase = c;
    // TODO: Timer, how long it took user to complete sim
  }

  addFeedback(feedback: string) {
    this.feedback.unshift(feedback);
  }

  getCaseById(id: string): Promise<Case> {
    let promise = new Promise<Case>((res, rej) => {
      switch (id.toLowerCase()) {
        case 'case1':
          res(Case1);
          break;
        case 'case2':
          res(Case2);
          break;
        default:
          break;
      }
    });
    return promise;
  }

  setCurrentCase(c: Case) {
    this.currentCase = c;
  }

  handleCasePossiblity(cp: CasePossibility) {
    this.addFeedback(cp.feedback);
    // TODO: This does not reset between attemps because it's coming from the model file not a copy of the object
    cp.checkedByUser = true;
    this.clickedPossibilities.push(cp);

    /*     if (!keyNoOrder.includes(cp.id)) {
      this.clickedPossibilitiesIds.push(cp.id);
    } */
    this.clickedPossibilitiesIds.push(cp.id);
    // If critical failure, end run
    if (cp.criticalFailure) {
      this.addFeedback('Case Failed!');
      this.currentSimulation.failed = true;
    }

    /*     if (
      this.clickedPossibilitiesIds.length === key.length &&
      this.allVitalsChecked()
    ) {
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
    } */
  }

  allVitalsChecked() {
    return Case1.vitals
      .map((cp) => cp.checkedByUser)
      .reduce((prev, curr) => {
        if (!prev || !curr) {
          return false;
        }
        return true;
      });
  }

  closeCase() {
    // Sort clicked ids by wether they are ordered or not
    if (!this.currentCase) {
      console.error('No case selected');
      return;
    }

    let unordered: string[] = [];
    let ordered: string[] = [];

    this.clickedPossibilitiesIds.forEach((id) => {
      if (this.currentCase?.key.keyUnordered.includes(id)) {
        unordered.push(id);
      } else {
        ordered.push(id);
      }
    });
    console.log(unordered, ordered, this.clickedPossibilitiesIds);

    if (
      unordered.length === this.currentCase?.key.keyUnordered.length &&
      ordered.length === this.currentCase?.key.keyOrdered.length
    ) {
      try {
        ordered.forEach((id, index) => {
          if (this.currentCase?.key.keyOrdered[index] !== id) {
            this.addFeedback('Case Failed! Something was done out of order.');
            this.currentSimulation.failed = true;
            throw {
              index,
              feedback:
                this.clickedPossibilities[
                  this.clickedPossibilitiesIds.indexOf(id)
                ].feedback,
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
    } else {
      // Fails
      this.addFeedback(`Case Failed, you are missing some steps!`);
      this.currentSimulation.failed = true;
    }
    if (!this.currentSimulation.failed) {
      this.currentSimulation.complete = true;
      this.addFeedback('Simulation Complete!');
    }
  }
}
