import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

// models
import {  YesterdayStats } from '../../../models/dashboard/yesterday-stats';

// 3rd party
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

// material
import { MatSort, MatSortable, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-global-todaycases-card',
  templateUrl: './dashboard-global-todaycases-card.html',
  styleUrls: ['./dashboard-global-todaycases-card.css'],
})
export class GlobalTodayCasesCardComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public data: any;

  constructor(private dashboardService: DashboardService) {



   }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const that = this;


    this.dashboardService.state$
      .pipe(
        map(state => state.allAsOfYesterday),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        that.data = response;

        // https://apexcharts.com/angular-chart-demos/radialbar-charts/custom-angle-circle/

        /*
        todayCases: 26114
        todayDeaths: 994
        todayRecovered: 18475
        */
        const total = that.data.todayCases;

        this.chartOptions = {
          title: {
            // tslint:disable-next-line: max-line-length
            text:  `Today's New Cases: ` + that.data.todayCases.toLocaleString(), // + '\n' +  `Today's Recoveries: ` + that.data.todayRecovered + '\n' +  `Today's Deaths: ` + that.data.todayDeaths  ,
            align: 'center'
          },
        // tslint:disable-next-line: max-line-length
        series: [ parseFloat((that.data.todayRecovered  / total * 100).toFixed(2)), parseFloat((that.data.todayDeaths  / total * 100).toFixed(2))],
        chart: {
          height: 320,
          type: 'radialBar',
          },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined
            },
            dataLabels: {
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        },
        colors: ['#00e396', '#feb019', '#39539E'],
      labels: ['Recoveries (' + this.data.todayRecovered.toLocaleString() + ')', 'Deaths (' + this.data.todayDeaths.toLocaleString() + ')'],
      legend: {
        show: true,
        floating: true,
        fontSize: '12px',
        position: 'left',
        offsetX: -30,
        offsetY: 70,
        labels: {
          useSeriesColors: true
        },
        formatter(seriesName, opts) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex] + '%';
        },
        itemMargin: {
          horizontal: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
      };
        // this.chartOptions = {
        //   series: [],
        //   chart: {
        //     width: 360,
        //     type: 'pie'
        //   },
        //   labels: ['Active', 'Recovered', 'Died'],
        //   responsive: [
        //     {
        //       breakpoint: 480,
        //       options: {
        //         chart: {
        //           width: 300
        //         },
        //         legend: {
        //           position: 'bottom'
        //         }
        //       }
        //     }
        //   ]
        // };

      });
  }

  ngOnDestroy(): void {

  }
}


