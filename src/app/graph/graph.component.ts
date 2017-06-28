import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, RouterState} from "@angular/router";
import {UIChart} from "primeng/primeng";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
    data: any;
    options = {};
    graphType: string = 'bar';

    @ViewChild('myChart') myChart: UIChart;

    constructor(private router: Router) {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }

    ngOnInit() {
    }


    update(e) {
        let count = 12;

        // graph data
        let data = [];
        for (let i = 0; i < count; i++) {
            data.push(Math.floor(Math.random() * 255));
        }

        // create simple lables
        let labels = [];
        for (let i = 0; i < data.length; i++) {
            labels.push(i + 1);
        }

        // create random colors - this is in a separate for loop just for readability
        let colors = [];
        for (let i = 0; i < data.length; i++) {
            colors.push(`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.4)`);
        }
        this.data = {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2
                }
            ]
        }
        this.options = {
            legend: {display: false},
            // responsive:false, //<====  play with this to see what happens
            layout: {padding: {left: 50, right: 50, top: 30, bottom: 0}}
        }
    }

    refresh() {
        this.myChart.reinit();
    }
}



