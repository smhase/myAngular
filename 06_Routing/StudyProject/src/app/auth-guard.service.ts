import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

// We are writing Injectable here so that we can use the auth.service file here in the constructor
// We have to inject it only because this service is using another service
// @Injectable is used when one service uses another service
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  // This is to tell if the current page is ok to access ie the page on which it is applied
  // Check app-routing.ts to see where it is applied
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }
  // This is to tell if the child pages of current pages are ok to access 
  // Check app-routing.ts to see which parent is applied with canActivated so that you will know this function is applied to these pages as child
  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  // Here we just call canActivate but we can have custom implementation and authorization for child routes
    return this.canActivate(route, state);
  }
}
