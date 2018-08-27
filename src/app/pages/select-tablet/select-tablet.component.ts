import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-tablet',
  templateUrl: './select-tablet.component.html',
  styleUrls: ['./select-tablet.component.css']
})
export class SelectTabletComponent implements OnInit {
    specification: boolean;
  constructor() {
    this.specification = true;
  }

  ngOnInit() {
  }

  specifications() {
    this.specification = false;
    // document.getElementById('card1').style.display = 'none';
  }
  information() {
      this.specification = true;
      // document.getElementById('card1').style.display = 'block';
  }

}
