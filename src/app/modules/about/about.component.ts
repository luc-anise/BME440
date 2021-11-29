import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   names = ["Luc Annise", "Alexander Eichert", "Shayne Hays", "Sarah Spinelli", "Lydia Sprague"]
  constructor() { }

  ngOnInit(): void {
  }

}
