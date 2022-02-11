import { Component, OnInit } from '@angular/core';
import { Controller } from 'models/Case';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent implements OnInit {
  controller?: Controller;

  constructor(public caseService: CaseService) {}

  ngOnInit(): void {}
}
