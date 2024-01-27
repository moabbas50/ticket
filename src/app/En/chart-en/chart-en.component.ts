import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexYAxis,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexTitleSubtitle,
  ApexFill,
  ApexMarkers,
  ApexAnnotations,

} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  markers: ApexMarkers;
  fill: ApexFill;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
};
@Component({
  selector: 'app-chart-en',
  templateUrl: './chart-en.component.html',
  styleUrls: ['./chart-en.component.css']
})
export class ChartEnComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.initChart();
  }
  initChart(): void {
    this.chartOptions = {
      series: [
        {
          name: "use",
          data: [150, 210, 140, 200, 250, 230, 200, 250, 205, 199, 230, 190],
          color: "rgba(63, 61, 163,0.74)"
        }
      ],
      xaxis: {
        type: "category",
        categories: [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"  ],
        tickAmount: 12,
        min: 1,
        max: 12,
        tickPlacement: 'on',
        labels: {
          style: {
            colors: [" rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)", " rgba(63, 61, 163, 0.74)",],
            fontSize: '12px',
            fontFamily: "'Neo Sans Arabic', sans-serif",
            fontWeight: 500,

          }
        },

      },
      chart: {
        width: "100%",
        height: 235,
        type: "area",
        fontFamily: "'Neo Sans Arabic', sans-serif",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },

      yaxis: {
        show: false,
      },
      tooltip: {
        enabled: true,
        custom: undefined,
        fillSeriesColor: true,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
        x: {
          show: false,
          format: 'dd MMM',
          formatter: undefined,
        },
      },
      title: {
        text: "coupon usage stats",
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238'
        }
      },
      subtitle: {
        text: "05,Jul,2023-05,Aug,2023",
        align: 'left',
        margin: 50,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: undefined,
          color: '#9699a2'
        },
      }
    };

  }

}
