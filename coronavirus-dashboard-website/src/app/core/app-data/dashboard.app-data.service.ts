import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { AppDataService } from './app-data.service'
import { ConfigurationManagerService } from '../service/configuration-manager.service';
import { Stats } from 'src/app/models/dashboard/country-stats';



@Injectable()
export class DashboardAppDataService extends AppDataService {

  constructor(protected _http: HttpClient, public configService: ConfigurationManagerService) {
    super(configService);
  }
  // getRawTreeData(): Observable<any> {
  //   return this._http.get<string[]>(this.getWebApiHost() + 'alertmessage/');
  // }

  // function that calls a web api with arguments being pased
  public getGlobalCases(): Observable<Stats> {
    let headers = new HttpHeaders();
    return this._http.get(this.getWebApiHost() + 'jhucsse', { headers });
  }

  public getAllAsOfYesterday() {
    let headers = new HttpHeaders();
    return this._http.get(this.getWebApiHost() + 'all?yesterday', { headers });
  }

  public getGlobalHistoricalData() {
    let headers = new HttpHeaders();
    return this._http.get(this.getWebApiHost() + 'historical/all?lastdays=230', { headers });
  }

  public getAllCurrentCountryData() {
    let headers = new HttpHeaders();
    return this._http.get(this.getWebApiHost() + 'continents?yesterday=true&sort', { headers });
  }

  public getDataOfPastSevenDays() {
    let headers = new HttpHeaders();
    return this._http.get(this.getWebApiHost() + 'historical/all?lastdays=7', { headers });
  }

}
