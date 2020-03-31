import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke, ApexLegend, ApexOptions, ApexPlotOptions } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexOptions;
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

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
      plotOptions: {
        bar: {
          startingShape: 'flat',
          endingShape: 'rounded',
          colors: {
            ranges: [
              {
                from: 0,
                to: 1,
                color: '#69aeff'
              }
            ]
          }
          ,
          dataLabels: {
            hideOverflowingLabels: true,
            orientation: "vertical"
          }
        }
      },
      series: [
        {
          name: "Amount(Ksh)",
          data: [20000, 30000, 15000, 12000, 20000, 30000,
            15000, 12000, 13000, 10000, 12000, 13000,
            30000, 15000, 20000, 5000, 12000, 23000,
            20000, 30000, 15000, 12000, 20000, 30000,
            15000, 12000, 13000, 10000, 12000, 13000
          ]
        }
      ],
      chart: {
        zoom: {
          enabled: false
        },
        height: 350,
        type: 'bar',
      },
      xaxis: {
        categories: ["Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8"]
      },
    }
  }
}
