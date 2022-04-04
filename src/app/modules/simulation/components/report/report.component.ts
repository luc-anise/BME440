import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor(
    public caseService: CaseService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(async (params) => {
      let reportID = params['id'];
      this.caseService.attempt = await this.caseService.fetchAttempt(reportID)
    });
  }

  /**
   *
   * @returns Time Elapsed in minutes
   */
  timeElapsed() {
    let end = this.caseService.attempt.endTime!.toDate();
    let start = this.caseService.attempt.startTime!.toDate();

    let date = new Date(end.getTime() - start.getTime());
    return date;
  }
}
