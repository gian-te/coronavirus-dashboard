import { Component, OnInit} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationService, NotificationObject, NotificationActions } from './notification.service';

@Component({
  selector: 'div-notification',
  template: '',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  durationInSeconds = 5;

  constructor(private notificationService: NotificationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() { 
    this.notificationService.notificationObject.subscribe(data => {
      this.openSnackBar(data);
    });
  }

  private openSnackBar(notificationObject: NotificationObject) {
    if (notificationObject) {
      const config = new MatSnackBarConfig();
      config.duration = this.durationInSeconds * 1000;
      switch (notificationObject.action) {
        case NotificationActions.ERROR: {
          config.panelClass = 'NotificationError';
          break;
        }
        case NotificationActions.WARNING: {
          config.panelClass = 'NotificationWarning';
          break;
        }
        default: {
          config.panelClass = 'NotificatioInfo';
          break;
        }
      }
      
      this.snackBar.open(
        notificationObject.message,
        undefined,
        config);
    }
  }
}
