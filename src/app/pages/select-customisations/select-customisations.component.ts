import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-select-customisations',
  templateUrl: './select-customisations.component.html',
  styleUrls: ['./select-customisations.component.css'],
    animations: [

        trigger('goals', [
            transition('* => *', [

                query(':enter', style({ opacity: 0 }), {optional: true}),

                query(':enter', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
                    ]))]), {optional: true})
                ,
                query(':leave', stagger('300ms', [
                    animate('.6s ease-out', keyframes([
                        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                        style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
                    ]))]), {optional: true})
            ])
        ])

    ]
})
export class SelectCustomisationsComponent implements OnInit {

  constructor() { }
  open = false;
  open2 = false;
  menu = false;
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

    openDropMenu() {
    this.menu = true;
    }

}
