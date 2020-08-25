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
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-global-case-ratio-card',
  templateUrl: './dashboard-global-case-ratio-card.html',
  styleUrls: ['./dashboard-global-case-ratio-card.css'],
})
export class GlobalCaseRatioCardComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public yesterdayData: YesterdayStats;

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
        that.yesterdayData = response;

        // https://apexcharts.com/angular-chart-demos/pie-charts/
        this.chartOptions = {
          series: [that.yesterdayData.active, that.yesterdayData.recovered, that.yesterdayData.deaths],
          chart: {
            width: 360,
            type: 'donut'
          },
          labels: ['Active', 'Recovered', 'Died'],
          colors: ['#00e396', '#ff4560', '#39539E'],
          legend:
          {
              offsetY: 45,
              show: true,
              labels: {
                  useSeriesColors: true
                }
              },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 180
                },
                legend: {
                  position: 'bottom'
                }
              }
            }
          ]
        };

      });
  }

  ngOnDestroy(): void {

  }
}


