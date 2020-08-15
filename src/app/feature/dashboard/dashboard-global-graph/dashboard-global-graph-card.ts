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
  selector: 'app-global-graph-card',
  templateUrl: './dashboard-global-graph-card.html',
  styleUrls: ['./dashboard-global-graph-card.css'],
})
export class GlobalGraphCardComponent implements OnInit, OnDestroy {

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
    // https://corona.lmao.ninja/v2/historical/all?lastdays=280
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
        map(state => state.globalData),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        console.log(response[0]);
        const ph = response.find(item => item.country === 'Philippines');
        console.log(ph);
        this.updatedAt = ph.updatedAt;
      });
    this.dashboardService.state$
      .pipe(
        map(state => state.allAsOfYesterday),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        this.latest = response.updated;
        if (this.latest)
        {
          this.latest -= 19872000000;
        }
        this.dashboardService.getGlobalHistoricalData();
      });
  }

  // https://apexcharts.com/angular-chart-demos/line-charts/zoomable-timeseries/
  renderChart() {

    let day = this.latest;
    const dates = [];

    Object.keys(this.data.cases).forEach(key => {
      day = day + 86400000; // + 1 day
      try {
        // tslint:disable-next-line: radix
        const count = parseInt(this.data.cases[key]);
        dates.push([day, count]);
      }
      catch (err){
        console.log(err);
      }
      console.log(dates);
    });

    this.series = [
      {
        name: 'Confirmed',
        data: dates
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
        text: 'Confirmed'
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


