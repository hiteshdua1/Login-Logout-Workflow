import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CookieService } from './cookie.service';


@Injectable()
export class UnauthenticatedRoutesGuard implements CanActivate {

    constructor(private router: Router, private cookieService: CookieService) {
    }

    canActivate(): boolean {
        const cookie = this.cookieService.getUserCookie();
        // If cookie exists, then navigate to view
        if (cookie) {
            this.router.navigate(['view']);
            return false;
        }
        return true;
   }
}
