import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './countries.component';
import { CountryPickerComponent } from './country-picker/country-picker.component';

export const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

export const routedComponents = [
  CountriesComponent,CountryPickerComponent
];