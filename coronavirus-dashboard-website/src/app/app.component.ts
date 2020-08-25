import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-dashboard';
  constructor(private router: Router) { }
  menuClicked(e, menu: string) {
    console.log(e);
    console.log(menu);
    this.router.navigateByUrl(menu);
  }
}
