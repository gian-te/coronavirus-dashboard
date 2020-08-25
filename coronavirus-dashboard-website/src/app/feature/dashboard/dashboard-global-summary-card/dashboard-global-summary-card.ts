import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

// models 
import {  CountryStats } from '../../../models/dashboard/country-stats';
import {  YesterdayStats } from '../../../models/dashboard/yesterday-stats';

// 3rd party
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

// material
import { MatSort, MatSortable, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-global-summary-card',
  templateUrl: './dashboard-global-summary-card.html',
  styleUrls: ['./dashboard-global-summary-card.css'],
})
export class GlobalSummaryCardComponent implements OnInit, OnDestroy {

  public yesterdayData: YesterdayStats;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getAllAsOfYesterday();
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
        console.log(this.yesterdayData);
        setInterval(() => { that.dashboardService.getAllAsOfYesterday(); }, 15 * 60 * 1000);

      });
  }

  ngOnDestroy(): void {

  }
}


