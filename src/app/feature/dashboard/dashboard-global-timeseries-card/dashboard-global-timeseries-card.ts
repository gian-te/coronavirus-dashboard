import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';


import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from 'ng-apexcharts';

@Component({
  selector: 'app-global-timeseries-card',
  templateUrl: './dashboard-global-timeseries-card.html',
  styleUrls: ['./dashboard-global-timeseries-card.css'],
})
export class GlobalTimeseriesCardComponent implements OnInit, OnDestroy {

  constructor(private dashboardService: DashboardService) { }

  public data: any;
  public updatedAt: string;
  public latest: any ; // subtract 19872000000
  // apex charts: https://apexcharts.com/angular-chart-demos/line-charts/zoomable-timeseries/
  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;


  ngOnInit() {
    // https://corona.lmao.ninja/v2/historical/all
    // https://corona.lmao.ninja/v2/historical/all?lastdays=230
    // this.dashboardService.getGlobalHistoricalData();
  }

  ngAfterViewInit() {
    const that = this;
    this.dashboardService.state$
      .pipe(
        map(state => state.globalHistoricalData),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        console.log(response);
        this.data = response;
        this.renderChart();
      });
    this.dashboardService.state$
      .pipe(
        map(state => state.allAsOfYesterday),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        this.latest = response.updated;
        this.dashboardService.getGlobalHistoricalData();
      });
  }

  // https://apexcharts.com/angular-chart-demos/line-charts/zoomable-timeseries/
  renderChart() {
    let day = this.latest;
    const dayInMilliseconds = 86400000;
    const confirmed = [];
    const recovered = [];
    const deaths = [];

    Object.keys(this.data.cases).reverse().forEach(key => {
    if (!this.updatedAt)
      {
        this.updatedAt = new Date(key).toString();
      }

    day = day - dayInMilliseconds; // + 1 day
    try {
        // tslint:disable-next-line: radix
        const count = parseInt(this.data.cases[key]);
        confirmed.push([day, count]);
      }
      catch (err){
        console.log(err);
        day = day + dayInMilliseconds;
      }
      // console.log(dates);
    });

    day = this.latest;
    Object.keys(this.data.recovered).reverse().forEach(key => {
    if (!this.updatedAt)
      {
        this.updatedAt = new Date(key).toString();
      }

    day = day - dayInMilliseconds; // + 1 day
    try {
        // tslint:disable-next-line: radix
        const count = parseInt(this.data.recovered[key]);
        recovered.push([day, count]);
      }
      catch (err){
        console.log(err);
        day = day + dayInMilliseconds;
      }
      // console.log(dates);
    });

    day = this.latest;
    Object.keys(this.data.deaths).reverse().forEach(key => {
    if (!this.updatedAt)
      {
        this.updatedAt = new Date(key).toString();
      }

    day = day - dayInMilliseconds; // + 1 day
    try {
        // tslint:disable-next-line: radix
        const count = parseInt(this.data.deaths[key]);
        deaths.push([day, count]);
      }
      catch (err){
        console.log(err);
        day = day + dayInMilliseconds;
      }
      // console.log(dates);
    });

    this.series = [
      {
        name: 'All Confirmed Cases',
        data: confirmed
      }
      ,
      {
        name: 'Recovered',
        data: recovered
      }
      ,
      {
        name: 'Deaths',
        data: deaths
      }
    ];
    this.chart = {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: 'Coronavirus Cases',
      align: 'left'
    };
    this.fill = {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter(val) {
          return (val).toFixed(0);
        }
      },
      title: {
        text: 'Count'
      }
    };
    this.xaxis = {
      type: 'datetime'
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter(val) {
          return (val).toFixed(0);
        }
      }
    };
  }

  // uses a  trial version of CanvasJS, not ideal...
  renderTrial()
  {
      // https://canvasjs.com/angular-charts/
    // const dataPoints = [];
    // const y = 0;
    // console.log('cases:');
    // console.log(this.data.cases);
    // if (Object.keys(this.data.cases).length) {
    //   Object.keys(this.data.cases).forEach(key => {
    //     // console.log('\n' + key + ': ' + this.data.cases[key]);
    //     dataPoints.push({ x: new Date(key), y: this.data.cases[key] });
    //   });
    // }
    // const chart = new CanvasJS.Chart('chartContainer', {
    //   zoomEnabled: true,
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   theme: 'light2',
    //   title: {
    //     text: ''
    //   },
    //   axisX: {
    //     valueFormatString: 'DD MMM',
    //     crosshair: {
    //       enabled: true,
    //       snapToDataPoint: true
    //     }
    //   },
    //   subtitles: [{
    //     text: ''
    //   }],
    //   data: [
    //   {
    //     type: 'line',
    //     dataPoints
    //   }]
    // });
    // chart.render();
  }

  ngOnDestroy(): void {

  }
}


