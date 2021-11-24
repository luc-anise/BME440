import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {
  constructor(public caseService: CaseService) {}

  ngOnInit(): void {
   
  }
}
