import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserLogService } from './user-log.service';

@Injectable({ providedIn: 'root' })

export class AuthGuardService implements CanActivate {

  constructor(private authService: UserLogService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['login']);
    } else {
      return true;
    }
  }
}
