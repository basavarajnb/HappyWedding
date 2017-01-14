import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.scss']
})
export class CeremonyComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Ceremony');
  }

}
