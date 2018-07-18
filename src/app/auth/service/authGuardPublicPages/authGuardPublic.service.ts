import { Injectable }  from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthPublicPagesService } from './authPublic.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthPublicPagesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url): boolean {
    //console.log(this.authService.login())
    if (this.authService.login()) { return true; }

    // Store the attempted URL for redirecting
    //this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/pages']);
    return false;
  }
}


