import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-kiosk',
  templateUrl: './full-kiosk.component.html',
  styleUrls: ['./full-kiosk.component.css']
})
export class FullKioskComponent implements OnInit {
  count = 3;
  constructor() { }

  ngOnInit() {
  }
    minus() {
    this.count --;
    }
    plus() {
        this.count ++;
    }

}
