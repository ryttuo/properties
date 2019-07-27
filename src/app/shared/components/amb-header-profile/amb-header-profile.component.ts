import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-header-profile',
  templateUrl: './amb-header-profile.component.html',
  styleUrls: ['./amb-header-profile.component.scss']
})
export class AmbHeaderProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMessage(message) {
    console.log(message);
  }

}
