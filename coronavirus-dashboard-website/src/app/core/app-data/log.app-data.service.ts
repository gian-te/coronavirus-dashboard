import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { AppDataService } from './app-data.service'
import { BaseLogAppDataService } from '../service/log-manager.service';
import { ConfigurationManagerService } from '../service/configuration-manager.service';

@Injectable()
export class LogAppDataService extends AppDataService implements BaseLogAppDataService {
  constructor(public configService: ConfigurationManagerService) {
    super(configService);
  }
  public Log(message: string) {
    console.log(message);
  }
  public LogError(error: Error) {
    console.log(error.message);
  }
}
