import { Component, OnInit } from '@angular/core';
import { Case, CasePossibility } from 'models/Case';
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

  onParamClick() {
    this.paramClicks++;
    if (this.paramClicks === 5) {
      this.paramClicks = 0;
    }
    const params = this.caseService.currentCase!.params![this.paramClicks];
    this.caseService.addFeedback(`${params.name}: ${params.value}`);
  }

  getArrowCheckCP(C: Case): CasePossibility {
    let cp = C.controller.find((c) => c.id === 'arrowCheck');
    return cp!;
  }

  
}
