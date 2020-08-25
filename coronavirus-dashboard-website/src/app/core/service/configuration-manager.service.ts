import { Injectable } from '@angular/core';
import { of, Observable, ObservableInput } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';



export class BaseConfigAppDataService {
  GetConfig(key: string): Observable<any> { throw new Error("Method not implemented."); };
  SaveConfig(key: string, value: any): Observable<any> { throw new Error("Method not implemented."); };
}

/* [GT] This service is a singleton. The config file will be loaded only once and will be available to all components
 using this service once initialized. This service will load the contents of the .json file to an object in memory
 which will be accessible in this service using the settingsObj property. Consumers of this service can just
 use configService.load()["configKey"] to retrieve a config value.*/
@Injectable(
  {
    providedIn: 'root',
  })
export class ConfigurationManagerService  {
  public webApiUrl: string;
  public signalrUrl: string;
  private settings: string;
  private settingsObj: any;
  constructor(public _http: HttpClient) {

  }

  load()
  {
    try {
      // remove if statement to load settings.json for every server call.
      if (!this.settingsObj) {
        this.settings = this.loadTextFileAjaxSync('./settings.json', 'application/json');
        this.settingsObj = JSON.parse(this.settings);
      }
      return this.settingsObj;
    } catch (e) {
      console.log(e);
    }
  }

  protected loadTextFileAjaxSync(filePath, mimeType) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    if (mimeType != null) {
      if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType(mimeType);
      }
    }
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      return xmlhttp.responseText;
    }
    else {
      return null;
    }
  }
}
