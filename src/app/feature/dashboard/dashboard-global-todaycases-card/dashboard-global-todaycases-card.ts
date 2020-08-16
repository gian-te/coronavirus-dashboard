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

        // https://apexcharts.com/angular-chart-demos/pie-charts/

        /*
        todayCases: 26114
        todayDeaths: 994
        todayRecovered: 18475
        */
        this.chartOptions = {
          series: [that.data.todayCases, that.data.todayRecovered, that.data.todayDeaths],
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
                  width: 300
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


