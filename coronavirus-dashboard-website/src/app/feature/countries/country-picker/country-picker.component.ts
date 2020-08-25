import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.css']
})
export class CountryPickerComponent implements OnInit {
  countries: [];
  selected: string;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries();
  }

  // https://appdividend.com/2019/12/05/angular-select-dropdown-example-angular-material-select/
  ngAfterViewInit(): void{
    this.countriesService.state$
      .pipe(
        map(state => state.countries),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        
        this.countries = response;
        console.log(this.countries);
      });
  }
}
