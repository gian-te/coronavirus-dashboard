import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { AppDataService } from './app-data.service'
import { ConfigurationManagerService } from '../service/configuration-manager.service';




@Injectable()
export class CountriesAppDataService extends AppDataService {
  
  constructor(protected _http: HttpClient, public configService: ConfigurationManagerService) {
    super(configService);
  }
  // getRawTreeData(): Observable<any> {
  //   return this._http.get<string[]>(this.getWebApiHost() + 'alertmessage/');
  // }

  // function that calls a web api with arguments being pased


  public getAllCountries() {
    let headers = new HttpHeaders();
    return this._http.get(this.getWebApiHost() + 'countries?yesterday', { headers });
  }

  getSpecificCountryData(country: string) {
    let headers = new HttpHeaders();
    return this._http.get('https://localhost:44342/api/countries/' + country, { headers });
  }

  getAllCountryData() {
    let headers = new HttpHeaders();
    return this._http.get('https://gt-coronavirus-api.azurewebsites.net/api/countries/parallel/all' , { headers });
  }
}
