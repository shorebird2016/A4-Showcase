import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})

export class HighchartComponent implements OnInit {

  constructor() { }

  sampleChart = new Chart( {
    chart: { type: 'line' },
    title: { text: 'Line chart' },
    credits: { enabled: false },
    series: [ {
      name: 'Line 1',
      data: [ 1, 2, 3 ]
    }]
  });

  add() { this.sampleChart.addPoint(Math. floor(Math.random() * 10)); }

  ngOnInit() {
  }

}
