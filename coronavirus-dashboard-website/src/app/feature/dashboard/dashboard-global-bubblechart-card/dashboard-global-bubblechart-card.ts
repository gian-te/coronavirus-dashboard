import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

// models
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-global-bubblechart-card',
  templateUrl: './dashboard-global-bubblechart-card.html',
  styleUrls: ['./dashboard-global-bubblechart-card.css'],
})
export class GlobalBubbleChartCardComponent implements OnInit, OnDestroy {


  data: any;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getAllCurrentCountryData();

  }

  ngAfterViewInit() {
    const that = this;
    this.dashboardService.state$
      .pipe(
        map(state => state.allCurrentCountryData),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        that.data = response;
        that.renderBubbleChart();
      });

  }

  // https://apexcharts.com/angular-chart-demos/bubble-charts/simple/
  renderBubbleChart() {
    this.chartOptions = {
      series: [
        // {
        //   name: 'Bubble1',
        //   data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 60
        //   })
        // },
        // push later
      ],
      chart: {
        height: 370,
        type: 'bubble',
        zoom: {
          enabled: true,
          autoScaleYaxis: true,
        },
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: 'Active Cases'
      },
      xaxis: {
        tickAmount: 5,
        type: 'datetime'
      },
      yaxis: {
       tickAmount: 2,
       max: 7500000
      }
    };

    this.data.forEach(obj => {
      // console.log(obj);
      this.chartOptions.series.push(
        {
          name: obj.continent,
          data: this.generateData(obj)
        }
      );
    });
  }
  generateData(obj: any): any {
    const series = [];
     // let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      // let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      // let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    const x = obj.updated;
    const y = obj.cases;
    const z = obj.active;
    console.log([x, y, z]);
    series.push([x, y, z]);

    return series;
  }

  // generateData(baseval, count, yrange) {
  //   let i = 0;
  //   let series = [];
  //   while (i < count) {
  //     let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
  //     let y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  //     let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

  //     series.push([x, y, z]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }


  ngOnDestroy(): void {

  }
}


