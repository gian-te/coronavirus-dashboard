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
  selector: 'app-global-tabular-card',
  templateUrl: './dashboard-global-tabular-card.html',
  styleUrls: ['./dashboard-global-tabular-card.css'],
})
export class GlobalTabularCardComponent implements OnInit, OnDestroy {

  public data: CountryStats[];
  public displayedColumns: string[] = ['country',  'confirmed', 'recovered', 'deaths'];
  public updatedAt: string;
  public dataSource = new MatTableDataSource<CountryStats>(this.data);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getGlobalData();

  }
  
  ngAfterViewInit() {
    const that = this;
    this.dashboardService.state$
      .pipe(
        map(state => state.globalData),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        that.data = response as CountryStats[];
        that.refreshDataSource();
      
      });
  
  }


  refreshDataSource() {
    console.log(this.data[0]);
    var ph = this.data.find(item => item.country === 'Philippines');
    console.log(ph);
    this.updatedAt = ph.updatedAt;

    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'confirmed': return item.stats.confirmed;
          case 'recovered': return item.stats.recovered;
          case 'deaths': return item.stats.deaths;
        default: return item[property];
      }
    };
    const matSort = { id: 'confirmed' } as MatSortable;
    this.sort.direction = 'asc' as SortDirection;
    this.sort.sort(matSort);
  }

  

  ngOnDestroy(): void {

  }
}


