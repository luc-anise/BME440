import { Component, Input, OnInit } from '@angular/core';
import { Case } from 'models/Case';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
  @Input() case?: Case;

  constructor(public caseService: CaseService) { }

  ngOnInit(): void {
  }

}