import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeatmapCardComponent } from './dashboard-heatmap-card/dashboard-heatmap-card';
import { MapCardComponent } from './dashboard-map-card/dashboard-map-card';
import { YesterdayCardComponent } from './dashboard-yesterday-card/dashboard-yesterday-card';
import { ChartCardComponent } from './dashboard-chart-card/dashboard-chart-card';
import { GlobalGraphCardComponent } from './dashboard-global-graph/dashboard-global-graph-card';


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
  DashboardComponent, HeatmapCardComponent, MapCardComponent, YesterdayCardComponent, ChartCardComponent, GlobalGraphCardComponent
];

