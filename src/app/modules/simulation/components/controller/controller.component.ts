import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent implements OnInit {
  paramClicks = 0;
  lvadImagePaths = [
    '../../../../../assets/LVAD_pics/pump_speed.png',
    '../../../../../assets/LVAD_pics/flow.png',
    '../../../../../assets/LVAD_pics/PI.png',
    '../../../../../assets/LVAD_pics/power.png',
    '../../../../../assets/LVAD_pics/battery.png',
  ];

  constructor(public caseService: CaseService) {}

  ngOnInit(): void {}
}
