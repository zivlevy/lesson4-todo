import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {startWith} from "rxjs/operator/startWith";


@Component({
    selector: 'app-rx',
    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {
    myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    look$: Observable<number>;

    constructor() {
    }

    ngOnInit() {
        this.look$ = Observable.from(this.myArr)
            .startWith(100)
            .take(5)


        this.look$.subscribe(
            x => console.log(x),
            () => {
                console.log('error')
            },
            () => {
                console.log('oaisudofiasdoifu')
            });

        let sveta$ = new Observable((xxx) => {
                xxx.next('z');
                xxx.next('i');
                xxx.next('v');
                // xxx.error('this is an error');
                xxx.complete();
            }
        );

        sveta$.subscribe(x=>console.log(x),
            (error)=>{console.log(error)},
            ()=>{console.log('completed')})

        // let click$ = Observable.fromEvent(document, 'mousemove');
        //
        // click$.map((e: MouseEvent) => e.clientX)
        //     .filter(x => x < 200)
        //     .take(100)
        //     .subscribe(e => {
        //         console.log(e)
        //     });

    }

    // let arr =this.myArr.reduce((a, b) => a + b);

    // let arr = this.myArr.filter((x)=>{return (x>=3)});
    // console.log(arr);
}
