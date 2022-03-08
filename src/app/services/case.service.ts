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

    if (
      unordered.length === this.currentCase?.key.keyUnordered.length &&
      ordered.length === this.currentCase?.key.keyOrdered.length
    ) {
      try {
        // Asserts that LVAD coordinator must be done before even the unordered things
        if (this.clickedPossibilitiesIds[0] !== 'callLVADCoordinator') {
          this.currentSimulation.failed = true;
          throw {
            index: 0,
            feedback: 'you MUST call the LVAD Coordinator first!',
          };
        }

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
          `Step ${err.index + 1} was incorrect because ${err.feedback}`
        );
      }
    } else {
      // Fails
      this.addFeedback(`Case Failed, you are missing some steps!`);
      this.currentSimulation.failed = true;
    }

    // If they didn't fail (statements above do not throw) do this
    if (!this.currentSimulation.failed) {
      this.currentSimulation.complete = true;
      this.addFeedback('Simulation Complete!');
    } else {
      const missingOrdered = this.currentCase.key.keyOrdered.filter((id) => {
        return !ordered.includes(id);
      });
      const missingUnordered = this.currentCase.key.keyUnordered.filter(
        (id) => {
          return !unordered.includes(id);
        }
      );
      const missing = missingOrdered.concat(missingUnordered);

      const missingCP = missing.map((id) => {
        let sub: CasePossibility | undefined;
        let cp =
          this.currentCase?.controller.find((x) => {
            if (x.subOptions) {
              sub = x.subOptions.find((y) => y.id === id);
              return false; //x.subOptions.find((y) => y.id === id);
            }
            return x.id === id;
          }) ||
          this.currentCase?.vitals.find((x) => x.id === id) ||
          this.currentCase?.lvadTeam.find((x) => x.id === id);
        return sub ? sub : cp;
      });

      console.log(missingCP);
    }
  }
}
