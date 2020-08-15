import { NgModule } from '@angular/core';
import { AppDataModule } from './app-data/app-data.module';
import { CoreServiceModule } from './service/core-service.module';
import { SpinnerModule } from './spinner/spinner.module';
import { NotificationModule } from './notification/notification.module';


import { SpinnerComponent } from './spinner/spinner.component';
import { NotificationComponent } from './notification/notification.component';


// acts as a 'trojan horse' for all of the other modules in src/app/core
@NgModule({
  declarations: [
  ],
  imports: [
    AppDataModule,
    CoreServiceModule.forRoot(),
    SpinnerModule,
    NotificationModule
  ],
  exports: [
    SpinnerComponent,
    NotificationComponent
  ],
  providers: [
    
  ],
})
export class CoreModule {
}
