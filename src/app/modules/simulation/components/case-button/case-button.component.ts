import { Component, Input, OnInit } from '@angular/core';
import { CasePossibility } from 'models/Case';

@Component({
  selector: 'app-case-button',
  templateUrl: './case-button.component.html',
  styleUrls: ['./case-button.component.scss']
})
export class CaseButtonComponent implements OnInit {

  @Input() CasePosiblity: CasePossibility;

  constructor() { }

  ngOnInit(): void {
  }

}
