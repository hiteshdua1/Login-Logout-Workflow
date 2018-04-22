import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from './../services/data.service';
import { StatusService } from './../services/status.service';
import { LoginStatus } from '../constants/common.constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router, private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.setStatus(LoginStatus.LOGGED_OUT);
  }

  public isValidField(field) {
    return field.invalid && field.dirty;
  }

  login(form: NgForm) {
    this.statusService.setStatus(LoginStatus.LOGGINING_IN);
    this.authService.login(form.value).subscribe(res => {
      if (res.success) {
        this.statusService.setStatus(LoginStatus.LOGGED_IN);
        this.router.navigate(['user-details']);
      } else {
        this.statusService.setStatus(LoginStatus.LOGGED_OUT);
        this.errorMessage = res.errorMessage;
      }
    });
  }

}
