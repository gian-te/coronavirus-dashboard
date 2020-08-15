import { NgModule } from '@angular/core';
import { DashboardAppDataService } from './dashboard.app-data.service';
import { LogAppDataService } from './log.app-data.service';

@NgModule({
  providers: [
    DashboardAppDataService,
    LogAppDataService,
  ],
})
export class AppDataModule { }
