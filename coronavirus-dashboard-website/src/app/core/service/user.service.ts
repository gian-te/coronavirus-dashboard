import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { UserApi } from '../.././fw/users/user-api';

@Injectable()
export class UserService implements UserApi {
  username = "emrsn\\current.user";
  isAuthenticated = true;

  constructor(private router: Router) { 
  }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return of({});
  }

  signOut(): Observable<any> {
    console.log('UserService.signOut');
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return of({});
  }

}
