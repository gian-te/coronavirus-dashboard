import { Injectable } from '@angular/core';

export class BaseLogAppDataService {
  Log(message: string) { throw new Error("Method not implemented."); };
  LogError(error: Error) { throw new Error("Method not implemented."); };
}

@Injectable()
export class LogManagerService {

  constructor(private logAppDataService: BaseLogAppDataService) {
  }

  public Log(message: string) {
    this.logAppDataService.Log(message);
  }

  public LogError(error: Error) {
    this.logAppDataService.LogError(error);
  }
}
