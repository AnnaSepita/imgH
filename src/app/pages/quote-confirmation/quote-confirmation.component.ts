import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-confirmation',
  templateUrl: './quote-confirmation.component.html',
  styleUrls: ['./quote-confirmation.component.css']
})
export class QuoteConfirmationComponent implements OnInit {

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
