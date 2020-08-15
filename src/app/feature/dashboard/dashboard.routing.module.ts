import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { GlobalTimeseriesCardComponent } from './dashboard-global-timeseries-card/dashboard-global-timeseries-card';
import { GlobalTabularCardComponent } from './dashboard-global-tabular-card/dashboard-global-tabular-card';
import { GlobalSummaryCardComponent } from './dashboard-global-summary-card/dashboard-global-summary-card';
import { GlobalPiechartCardComponent } from './dashboard-global-piechart-card/dashboard-global-piechart-card';
import { GlobalMapCardComponent } from './dashboard-global-map-card/dashboard-global-map-card';


export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

export const routedComponents = [
  // tslint:disable-next-line: max-line-length
  DashboardComponent, GlobalTabularCardComponent, GlobalMapCardComponent, GlobalSummaryCardComponent, GlobalPiechartCardComponent, GlobalTimeseriesCardComponent
];

