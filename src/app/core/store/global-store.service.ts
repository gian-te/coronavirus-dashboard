import { Injectable } from '@angular/core';
import { Store } from './store';
import { Observable } from 'rxjs';

class GlobalState {
  IsOnline: boolean = true;
}

@Injectable()
export class GloablStoreService extends Store<GlobalState>  {
  constructor() {
    super(new GlobalState());
  }
}
