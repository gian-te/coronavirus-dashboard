import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule, routedComponents } from './countries.routing.module';
import { CountriesService } from './countries.service';
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
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    routedComponents,
    // container component
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DashboardRoutingModule,
    SpinnerModule,
    GoogleMapsModule, NgApexchartsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatGridListModule, MatSelectModule, MatFormFieldModule
  ],
  exports:
    [
      CountriesComponent
    ],
  providers: [
    CountriesService,
    SpinnerService
  ],
})
export class CountriesModule { }
