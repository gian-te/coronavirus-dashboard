import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export class NotificationObject {
  message?: string;
  action?: NotificationActions;
}

export enum NotificationActions {
  INFORMATION,
  WARNING,
  ERROR,
}

@Injectable()
export class NotificationService {
  private _notficationObject: Subject<NotificationObject> = new Subject<NotificationObject>();
  public readonly notificationObject: Observable<NotificationObject> = this._notficationObject.asObservable();

  public showNotification(message: string, action: NotificationActions): void {
    let notification: NotificationObject = {
      message: message,
      action: action,
    };
    this._notficationObject.next(notification);
  }
}
