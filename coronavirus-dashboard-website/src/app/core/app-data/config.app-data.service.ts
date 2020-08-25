import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { AppDataService } from './app-data.service'
import { BaseConfigAppDataService, ConfigurationManagerService } from '../service/configuration-manager.service';

/*
 Use this service to 
*/
@Injectable()
export class ConfigAppDataService extends AppDataService implements BaseConfigAppDataService {
    GetConfig(key: string): Observable<any> {
        throw new Error("Method not implemented.");
    }
    SaveConfig(key: string, value: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
  constructor(public configService: ConfigurationManagerService) {
    super(configService);
  }

}
