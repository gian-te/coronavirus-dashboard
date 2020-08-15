import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule, routedComponents } from './countries.routing.module';
import { Countries } from './countries.service';
import { CountriesComponent } from './countries.component';
import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { SpinnerModule } from 'src/app/core/spinner/spinner.module';

// 3rd party
import { GoogleMapsModule } from '@angular/google-maps';
import { NgApexchartsModule } from 'ng-apexcharts';


// angular
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    routedComponents,
    CountriesComponent, // container component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    SpinnerModule,
    GoogleMapsModule, NgApexchartsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule,MatGridListModule
  ],
  exports:
    [
      CountriesComponent
    ],
  providers: [
    Countries,
    SpinnerService
  ],
})
export class CountriesModule { }
