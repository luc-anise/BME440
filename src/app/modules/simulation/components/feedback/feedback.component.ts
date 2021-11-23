import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(public caseService: CaseService) { }

  ngOnInit(): void {
    this.caseService.addFeedback('Test Feedback')
  }

}
