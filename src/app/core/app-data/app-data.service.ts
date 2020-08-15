import { HttpClient } from '@angular/common/http';
import { ConfigurationManagerService } from '../service/configuration-manager.service';


export class AppDataService  {
  protected webApiUrl: string;
  protected settingsLoaded: boolean;
  constructor(public configService: ConfigurationManagerService) {
   
  }

  public getWebApiHost(): string {
    let url: string;
    try {
      url = this.configService.load().webApiUrl;

      console.log('returning web api url ' + url);
      return url;
    } catch (e) {
      console.log(e);
    }
  }
}
