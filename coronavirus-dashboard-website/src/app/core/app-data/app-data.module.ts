import { NgModule } from '@angular/core';
import { DashboardAppDataService } from './dashboard.app-data.service';
import { LogAppDataService } from './log.app-data.service';
import { CountriesAppDataService } from './countries.app-data.service';

@NgModule({
  providers: [
    DashboardAppDataService,
    CountriesAppDataService,
    LogAppDataService,
  ],
})
export class AppDataModule { }
