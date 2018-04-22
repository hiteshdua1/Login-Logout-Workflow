import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../modal/user-details.modal';
import { CookieService } from './../services/cookie.service';
import { StatusService } from './../services/status.service';
import { LoginStatus } from '../constants/common.constants';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: UserDetails;

  constructor(private authService: AuthService, private router: Router,
     private cookieService: CookieService, private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.setStatus(LoginStatus.LOGGED_IN);
    this.userDetails = this.cookieService.getUserCookie();
  }
  logout() {
    this.authService.logout().subscribe((res) => {
      if (res) {
        this.router.navigate(['welcome']);
      }
    });
  }
}
