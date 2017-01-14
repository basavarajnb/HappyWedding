import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weddingcard',
  templateUrl: './weddingcard.component.html',
  styleUrls: ['./weddingcard.component.scss']
})
export class WeddingcardComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Wedding Card');
  }

}
