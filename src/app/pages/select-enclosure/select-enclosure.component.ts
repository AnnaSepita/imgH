import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-enclosure',
  templateUrl: './select-enclosure.component.html',
  styleUrls: ['./select-enclosure.component.css']
})
export class SelectEnclosureComponent implements OnInit {
    slider = 9;
    slider1 = 17;
  constructor() { }

  ngOnInit() {
  }
    range(count) {
        console.log(count.srcElement.value);
        console.log(count.value);
        this.slider = count.srcElement.value;
    }
    range1(count) {
        console.log(count.srcElement.value);
        console.log(count.value);
        this.slider1 = count.srcElement.value;
    }

}
