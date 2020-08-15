import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';

import { appRoutes } from './app.routings';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BaseLogAppDataService } from './core/service/log-manager.service';
import { LogAppDataService } from './core/app-data/log.app-data.service';
import { BaseConfigAppDataService, ConfigurationManagerService } from './core/service/configuration-manager.service';
import { ConfigAppDataService } from './core/app-data/config.app-data.service';

import { DashboardModule } from './feature/dashboard/dashboard.module';
import { CountriesModule } from './feature/countries/countries.module';

//3rd party
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule, // feature module
    CountriesModule, // feature module
    RouterModule.forRoot(appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }),
    HttpClientModule,
    CoreModule,
    MatMenuModule, MatButtonModule
  ],
  providers: [
    {
      provide: BaseLogAppDataService,
      useClass: LogAppDataService,
    },
    {
      provide: BaseConfigAppDataService,
      useClass: ConfigAppDataService,
    },
    ConfigurationManagerService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
