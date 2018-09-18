import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customisations',
  templateUrl: './customisations.component.html',
  styleUrls: ['./customisations.component.css']
})
export class CustomisationsComponent implements OnInit {
  open1 = false;
    open2 = false;
    open3 = false;
    open4 = false;
  constructor() { }

  ngOnInit() {
  }
  menu1() {
    this.open1 = true;
  }
    menu2() {
        this.open2 = true;
        console.log(this)
    }
    menu3() {
        this.open3 = true;
        console.log(this)
    }
    menu4() {
        this.open4 = true;
        console.log(this)
    }
  opn() {
      this.open1 = false;
      this.open2 = false;
      this.open3 = false;
      this.open4 = false;
  }

}
