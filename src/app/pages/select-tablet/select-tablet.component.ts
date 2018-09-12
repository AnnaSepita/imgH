import { Component, OnInit } from '@angular/core';
//import { noUiSlider } from '../../../../node_modules/nouislider';
@Component({
  selector: 'app-select-tablet',
  templateUrl: './select-tablet.component.html',
  styleUrls: ['./select-tablet.component.css']
})
export class SelectTabletComponent implements OnInit {
    specification: boolean;
    check: boolean;
    slider;
  constructor() {
    this.specification = true;
    this.check = false;
  }

  ngOnInit() {
       this.slider = document.getElementById('slider');
      //
      // noUiSlider.create(this.slider, {
      //     start: [20, 80],
      //     connect: true,
      //     range: {
      //         'min': 0,
      //         'max': 100
      //     }
      // });
  }

  specifications() {
    this.specification = false;
    // document.getElementById('card1').style.display = 'none';
  }
  information() {
      this.specification = true;
      // document.getElementById('card1').style.display = 'block';
  }
    yes() {
        this.check = true;
    }
    no() {
        this.check = false;
    }

}
