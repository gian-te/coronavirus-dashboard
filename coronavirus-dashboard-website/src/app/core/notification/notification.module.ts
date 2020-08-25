import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { NotificationService, NotificationObject, NotificationActions } from './notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  exports: [NotificationComponent],
  declarations: [NotificationComponent],
  providers: [NotificationService]
})
export class NotificationModule { }
