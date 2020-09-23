import { Injectable, OnDestroy } from '@angular/core';


// Core Services
import { Store } from '../../core/store/store';
import { CountriesAppDataService } from '../../core/app-data/countries.app-data.service';
import { SpinnerService } from '../../core/spinner/spinner.service';


// Shared Service
import { ConfigurationManagerService } from '../../core/service/configuration-manager.service';


export class CountriesState {
  selectedCountry = '';
  countries: any;
  countryData: any;
}

@Injectable()
export class CountriesService extends Store<CountriesState> {
 
  

  constructor(private appDataService: CountriesAppDataService,
              public spinnerService: SpinnerService
  ) {
    super(new CountriesState());

  }

  public getAllCountries() {
    this.appDataService.getAllCountries().subscribe(data => {
      this.setState({
        ...this.state,
        countries: data,
      });
    });
  }
  getSpecificCountryData(country: string) {
    this.appDataService.getSpecificCountryData(country).subscribe(data => {
      this.setState({
        ...this.state,
        countryData: data,
      });
    });
  }

  getAllCountryData() {
    this.appDataService.getAllCountryData().subscribe(data => {
      this.setState({
        ...this.state,
        countryData: data,
      });
    });
  }

  // public getGlobalData(): void {
  //   this.spinnerService.show();
  //   this.appDataService.getGlobalCases().subscribe(data => {
  //       this.setState({
  //         ...this.state,
  //         globalData: data,
  //       });
  //       this.spinnerService.hide();
  //     });
  // }

  // public getAllAsOfYesterday(): void {
  //    this.spinnerService.show();
  //    this.appDataService.getAllAsOfYesterday().subscribe(data => {
  //       this.setState({
  //         ...this.state,
  //         allAsOfYesterday: data,
  //       });
  //       this.spinnerService.hide();
  //     });
  // }
}
