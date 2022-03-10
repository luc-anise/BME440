import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent implements OnInit {

  constructor(public caseService: CaseService) {}

  ngOnInit(): void {}
}
