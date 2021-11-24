import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-lvad-team',
  templateUrl: './lvad-team.component.html',
  styleUrls: ['./lvad-team.component.scss'],
})
export class LvadTeamComponent implements OnInit {
  constructor(public caseService: CaseService) {}

  ngOnInit(): void {}
}
