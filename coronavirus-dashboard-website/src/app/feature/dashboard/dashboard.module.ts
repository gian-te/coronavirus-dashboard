import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule, routedComponents } from './dashboard.routing.module';
import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard.component';


// 3rd party
import { GoogleMapsModule } from '@angular/google-maps';
import { NgApexchartsModule } from 'ng-apexcharts';


// angular
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    routedComponents,
    DashboardComponent, // container component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    GoogleMapsModule, NgApexchartsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatGridListModule, MatProgressSpinnerModule
  ],
  exports:
    [
      DashboardComponent
    ],
  providers: [
    DashboardService
  ],
})
export class DashboardModule { }
