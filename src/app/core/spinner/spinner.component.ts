import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService, SpinnerState } from './spinner.service';

@Component({
  selector: 'div-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private spinnerStateChanged: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe(
      (state: SpinnerState) => {
        if (this.visible && state.show) {
          return;
        }
        this.visible = state.show;
      }
    );
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
