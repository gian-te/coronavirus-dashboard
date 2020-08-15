import { NgModule, ErrorHandler, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationManagerService } from './configuration-manager.service';
import { LogManagerService } from './log-manager.service';
import { ErrorHandlingService } from './error-handling.service';


@NgModule({
  imports: [CommonModule],
  providers: [
    ConfigurationManagerService,
    LogManagerService,
    { provide: ErrorHandler, useClass: ErrorHandlingService }
  ],
})
export class CoreServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreServiceModule,
      providers: [
        ConfigurationManagerService,
        LogManagerService,
        ErrorHandlingService
      ]
    };
  }
}

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
