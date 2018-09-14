import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-customisations',
  templateUrl: './select-customisations.component.html',
  styleUrls: ['./select-customisations.component.css']
})
export class SelectCustomisationsComponent implements OnInit {

  constructor() { }
  open = false;
  open2 = false;
  ngOnInit() {
  }
  select1() {
    this.open = true;
  }
    select2() {
        this.open = false;
    }

    select3() {
        this.open2 = true;
    }
    select4() {
        this.open2 = false;
    }

}
