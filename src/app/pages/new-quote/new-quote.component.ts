import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

    order: string = 'info.date';
    reverse: boolean = false;
    collection: any[] = [
        {
            date: 1,
            info: {
                name: 'john',
                number: '5551212',
                contactNo: 6510,
                email: 'rgsr@gddg.com',
                price: '43$',
                sent: true,
            }
        },
        {
            date: 4,
            info: {
                name: 'Ann',
                number: '2551212',
                contactNo: 10443,
                email: 'rgsr@gddg.com',
                price: '63$',
                sent: false,
            }
        },

        // }, {
        //     date: 5,
        //     info: {
        //         name: 'Mary',
        //         number: '555-9876',
        //         contactNo: 19
        //     }
        // }, {
        //     date: 2,
        //     info: {
        //         name: 'Mike',
        //         number: '555-4321',
        //         contactNo: 21
        //     }
    ];
    sortedCollection: any[];

    constructor(private orderPipe: OrderPipe) {
        this.sortedCollection = orderPipe.transform(this.collection, 'info.name');
        console.log(this.sortedCollection);
    }
    ngOnInit() {
    }

    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }

        this.order = value;
    }

}
