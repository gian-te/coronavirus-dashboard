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
    this._spinnerSubject.next( { show: true } as SpinnerState);
  }

  hide() {
    console.log('hiding spinner');
    let that = this;
    setTimeout(function() { that._spinnerSubject.next( { show: false } as SpinnerState); }, 500);
  }
}
