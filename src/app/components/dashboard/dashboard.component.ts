import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke, ApexLegend, ApexOptions } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexOptions;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      legend: {
        markers: {
          width: 1,
          height: 1
        }
      },

      series: [
        {
          name: "My series",
          data: [2000, 30000, 15000, 2000, 5000, 12000, 23000]
        }
      ],
      chart: {
        zoom: {
          enabled: false
        },
        height: 350,
        type: 'line',
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ["Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8"]
      },
    }
  }

}
