import { Component, Input, OnInit } from '@angular/core';
import { Case } from 'models/Case';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
  @Input() case?: Case;

  constructor() { }

  ngOnInit(): void {
  }

}