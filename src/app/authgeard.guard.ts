import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
//import { Router } from '@angular/router';

@Injectable()
export class AuthgeardGuard implements CanActivate {
  constructor(private user: UserService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.router.navigate(['/'])
      console.log('Your are not aurthnigate')
    return this.user.getUserLoggedIn();
  }
}
