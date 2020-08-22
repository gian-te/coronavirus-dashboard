import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-global-sevendays-card',
  templateUrl: './dashboard-global-sevendays-card.html',
  styleUrls: ['./dashboard-global-sevendays-card.css'],
})
export class GlobalSevenDayCasesCardComponent implements OnInit, OnDestroy {


  data: any;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDataOfPastSevenDays();

  }

  ngAfterViewInit() {
    const that = this;
    this.dashboardService.state$
      .pipe(
        map(state => state.sevenDayData),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        that.data = response;
        that.renderStackedColumnChart();
      });

  }

  // https://apexcharts.com/angular-chart-demos/bubble-charts/simple/
  renderStackedColumnChart() {
      
    this.chartOptions = {
      series: [
        {
          name: 'Confirmed',
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: 'Recovered',
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: 'Active',
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: 'Deaths',
          data: [9, 7, 5, 8, 6, 9, 4]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Case Breakdown'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter(val) {
            return val + 'K';
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter(val) {
            return val + 'K';
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };
  }


  ngOnDestroy(): void {

  }
}


