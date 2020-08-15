import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface SpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  public _spinnerSubject = new Subject<SpinnerState>();

  public readonly spinnerState: Observable<SpinnerState> = this._spinnerSubject.asObservable();

  constructor(
    @Optional()
    @SkipSelf()
    prior: SpinnerService
  ) {
    if (prior) {
      return prior;
    }
    console.log('created spinner service');
  }

  show() {
    console.log('showing spinner');
    this._spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    console.log('hiding spinner');
    var that = this;
    setTimeout(function () { that._spinnerSubject.next(<SpinnerState>{ show: false });}, 500); 
  }
}
