import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Registry');
  }

}
