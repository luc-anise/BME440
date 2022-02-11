import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cases = ["case1", "case2", "Case 3"]

  constructor() { }

  ngOnInit(): void {
  }
  expandCase() {
    
  }

}
