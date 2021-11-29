import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   names = ["Luc Annise", "Alexander Eichert", "Shayne Hays", "Sarah Spinelli", "Lydia Sprague"]
   msnames = ["Aidan Aicher, MS4", "Alex Freedenberg, MS4", "Sara Kianian, MS3", "Gloria Singleton, MS3"]

  constructor() { }

  ngOnInit(): void {
  }

}
