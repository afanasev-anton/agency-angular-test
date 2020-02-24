import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	headerTitel : string;

  constructor() {
  	this.headerTitel = "Join us to have the best winter experience";
  }

  ngOnInit(): void {
  }

}
