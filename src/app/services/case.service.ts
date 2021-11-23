import { Injectable } from '@angular/core';
import { Case, Case1 } from 'models/Case';
@Injectable({
  providedIn: 'root',
})
export class CaseService {
  feedback: string[] = [];

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
}
