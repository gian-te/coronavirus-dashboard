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
        console.log(that.data);
      });

  }

  // https://apexcharts.com/angular-chart-demos/bubble-charts/simple/
  renderStackedColumnChart() {
    const dates = [];
    const confirmed = [];
    const recovered = [];
    const deaths = [];
    const active = [];

    // loop over cases
    Object.keys(this.data.cases).forEach(key => {
      dates.unshift(key);
        // console.log('\n' + key + ': ' + this.data.cases[key]);
      confirmed.unshift(this.data.cases[key]);
    });

    Object.keys(this.data.deaths).forEach(key => {
        // console.log('\n' + key + ': ' + this.data.cases[key]);
      deaths.unshift(this.data.deaths[key] );
    });

    Object.keys(this.data.recovered).forEach(key => {

        // console.log('\n' + key + ': ' + this.data.cases[key]);
      recovered.unshift(this.data.recovered[key]);
      });

    for (let i = 0; i < confirmed.length; i++)
    {
      active.unshift(confirmed[i] - recovered[i]);
    }

    this.chartOptions = {
      series: [
        {
          name: 'Confirmed',
          data: confirmed
        },
        {
          name: 'Recovered',
          data: recovered
        },
        {
          name: 'Active',
          data: active
        },
        {
          name: 'Deaths',
          data: deaths
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
        categories: dates,
        labels: {
          formatter(val) {
            return val.toLocaleString(); // + 'K';
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
            return val.toLocaleString() + ''; // + 'K';
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


