import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-tablet',
  templateUrl: './select-tablet.component.html',
  styleUrls: ['./select-tablet.component.css']
})
export class SelectTabletComponent implements OnInit {
    specification: boolean;
    check: boolean;
    slider = 9;
    slider1 = 17;
    slider2 = 22;
    slider3 = 77;
    circle11 = false;
    circle12 = false;
    circle13 = false;
    circle14 = false;
    circle15 = false;
    circle16 = false;
  constructor() {
    this.specification = true;
    this.check = false;
  }

  ngOnInit() {
      // noUiSlider.create(this.slider, {
      //     start: [20, 80],
      //     connect: true,
      //     range: {
      //         'min': 0,
      //         'max': 100
      //     }
      // });
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
    range2(count) {
        console.log(count.srcElement.value);
        console.log(count.value);
        this.slider2 = count.srcElement.value;
    }
    range3(count) {
        console.log(count.srcElement.value);
        console.log(count.value);
        this.slider3 = count.srcElement.value;
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
  circle1() {
      this.circle11 = true;
  }
    circle111() {
        this.circle11 = false;
    }
    circle2()  {
        this.circle12 = true;
    }
    circle21()  {
        this.circle12 = false;
    }
    circle3()  {
        this.circle13 = true;
    }
    circle31()  {
        this.circle13 = false;
    }
    circle4()  {
        this.circle14 = true;
    }
    circle41()  {
        this.circle14 = false;
    }
    circle5()  {
        this.circle15 = true;
    }
    circle51()  {
        this.circle15 = false;
    }
    circle6()  {
        this.circle16 = true;
    }
    circle61()  {
        this.circle16 = false;
    }
}
