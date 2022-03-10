import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor(public caseService: CaseService) {}

  ngOnInit(): void {}

  /**
   * 
   * @returns Time Elapsed in minutes
   */
  timeElapsed() {
    let end = this.caseService.attempt.endTime!.toDate();
    let start = this.caseService.attempt.startTime!.toDate();

    let date = new Date(end.getTime() - start.getTime())
    return date;
  }
}
