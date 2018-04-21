import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CookieService } from './cookie.service';


@Injectable()
export class AuthenticatedRoutesGuard implements CanActivate {

    constructor(private router: Router, private cookieService: CookieService){
    }

    // If cookie Doesn't exists, then navigate to Login View
    canActivate(): boolean {
        const cookie = this.cookieService.getUserCookie();
        if (!cookie) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}
