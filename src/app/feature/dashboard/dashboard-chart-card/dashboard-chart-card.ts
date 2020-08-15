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
  ApexChart
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-chart-card',
  templateUrl: './dashboard-chart-card.html',
  styleUrls: ['./dashboard-chart-card.css'],
})
export class ChartCardComponent implements OnInit, OnDestroy {
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
        this.chartOptions = {
          series: [that.yesterdayData.active, that.yesterdayData.recovered, that.yesterdayData.deaths],
          chart: {
            width: 360,
            type: 'pie'
          },
          labels: ['Active', 'Recovered', 'Died'],
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


