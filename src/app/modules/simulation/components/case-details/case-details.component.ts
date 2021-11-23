import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {

  history = ["Case History: LVAD patient DH (58YO male) was presented to the Emergency Department after he jumped in the pool to save his son who he thought was drowning","test","yee"]

  constructor() { }

  ngOnInit(): void {
  }

}
