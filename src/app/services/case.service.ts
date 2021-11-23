import { Injectable } from '@angular/core';
import { Case1 } from 'models/Case';
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

  getCaseById(id: string){
    let promise = new Promise((res, rej)=>{
      res(Case1)
    })
    return promise;
  }
}
