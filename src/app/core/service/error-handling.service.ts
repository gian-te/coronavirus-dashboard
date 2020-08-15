import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandlingService implements ErrorHandler  {

  constructor() {
  }

  handleError(error) {
    console.log(error);
  }
}
